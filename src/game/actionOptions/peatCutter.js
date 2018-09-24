import { possiblePeatLocations } from '../constants'
import { emptyLandCell } from '../'

const cellMinusPeat = cell => {
  const indexOfPeat = cell.contents.indexOf('peat')
  return {
    ...cell,
    contents: [
      ...cell.contents.slice(0, indexOfPeat),
      ...cell.contents.slice(indexOfPeat + 1),
    ],
  }
}

export const removePeatFromCoord = (land, coord) => {
  const { row, col } = coord
  return [
    ...land.slice(0, row),
    [
      ...land[row].slice(0, col),
      cellMinusPeat(land[row][col]),
      ...land[row].slice(col + 1),
    ],
    ...land.slice(row + 1),
  ]
}

export const flipEmptyMoors = (land, coord) => {
  const [row, col] = coord
  // next if the tile still has a peat on it
  if (land[row][col].contents.indexOf('peat') !== -1) return land
  if (land[row][col].type === 'boardwalk') {
    return [
      ...land.slice(0, row),
      [
        ...land[row].slice(0, col),
        // This specifically saves the old contents, even though its probably
        // empty, because the rules say when you remove the last PEAT, not the last item.
        { ...emptyLandCell, contents: land[row][col].contents },
        ...land[row].slice(col + 1),
      ],
      ...land.slice(row + 1),
    ]
  } else if (land[row][col].type === 'dmoorNorth') {
    return [
      ...land.slice(0, row),
      [
        ...land[row].slice(0, col),
        // This should be the dmoorNorth tile
        { ...emptyLandCell, contents: land[row][col].contents },
        ...land[row].slice(col + 1),
      ],
      [
        ...land[row + 1].slice(0, col),
        // This should be the dmoorNorth tile
        { ...emptyLandCell, contents: land[row + 1][col].contents },
        ...land[row + 1].slice(col + 1),
      ],
      ...land.slice(row + 2),
    ]
  } else return land
}

export default ({ G, ctx: { currentPlayer }, args }) => ({
  ...G,
  action: null,
  players: {
    ...G.players,
    [currentPlayer]: {
      ...G.players[currentPlayer],
      inventory: [
        ...G.players[currentPlayer].inventory,
        ...Array(args.length).fill('peat'),
      ],
      land: possiblePeatLocations.reduce(
        flipEmptyMoors,
        args.reduce(removePeatFromCoord, G.players[currentPlayer].land)
      ),
    },
  },
})
