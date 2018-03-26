const cellNotEmpty = cell => cell.type !== 'empty'
const rowNotEmpty = row => row.every(cellNotEmpty)
export const findSeaLevel = dikes => dikes.findIndex(rowNotEmpty)

export const buildDikes = times => ({ G, ctx, args }) => {
  const { currentPlayer } = ctx
  const dikes = G.players[currentPlayer].dikes.slice()
  const flatDikes = dikes.reduce((accum, row) => [...row, ...accum], [])
  times = Math.min(
    times,
    flatDikes
      .slice() // fucking reverse() will fucking mutate
      .reverse()
      .findIndex(cellNotEmpty)
  )
  const nextDikes = [...flatDikes.slice(-times), ...flatDikes.slice(0, -times)]
  const newDikes = [
    nextDikes.slice(9, 12),
    nextDikes.slice(6, 9),
    nextDikes.slice(3, 6),
    nextDikes.slice(0, 3),
  ]
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [currentPlayer]: {
          ...G.players[currentPlayer],
          dikes: newDikes,
        },
      },
    },
    ctx,
    args,
  }
}

export const arrangeItem = ({ G, ctx }, { src, dst }) => {
  const player1 = G.players[ctx.currentPlayer]

  // the player object minus the item
  let player2 = {}
  let removedItem = null
  if (src.type !== 'tokens') {
    removedItem = player1[src.type][src.row][src.col].contents[src.i]
    player2 = {
      ...player1,
      [src.type]: [
        ...player1[src.type].slice(0, src.row),
        [
          ...player1[src.type][src.row].slice(0, src.col),
          {
            ...player1[src.type][src.row][src.col],
            contents: [
              ...player1[src.type][src.row][src.col].contents.slice(0, src.i),
              ...player1[src.type][src.row][src.col].contents.slice(src.i + 1),
            ],
          },
          ...player1[src.type][src.row].slice(src.col + 1),
        ],
        ...player1[src.type].slice(src.row + 1),
      ],
    }
  } else {
    removedItem = player1[src.type][src.i]
    player2 = {
      ...player1,
      tokens: [
        ...player1.tokens.slice(0, src.i),
        ...player1.tokens.slice(src.i + 1),
      ],
    }
  }

  // the player object plus the item in a better spot
  const player3 = {
    ...player2,
    [dst.type]: [
      ...player2[dst.type].slice(0, dst.row),
      [
        ...player2[dst.type][dst.row].slice(0, dst.col),
        {
          ...player2[dst.type][dst.row][dst.col],
          contents: [
            ...player2[dst.type][dst.row][dst.col].contents,
            removedItem,
          ],
        },
        ...player2[dst.type][dst.row].slice(dst.col + 1),
      ],
      ...player2[dst.type].slice(dst.row + 1),
    ],
  }

  return {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: player3,
    },
  }
}
