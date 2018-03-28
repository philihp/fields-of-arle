const cellIncludes = animal => cell => cell.contents.includes(animal)
const rowIncludes = animal => row => row.some(cellIncludes(animal))

const animalFoodValue = animal => (animal === 'cattle' ? 4 : 3)

const findFirstAnimalInRow = (row, animal) => {
  const colIndex = row.findIndex(cellIncludes(animal))
  if (colIndex === -1) return null
  return [colIndex, row[colIndex].contents.indexOf(animal)]
}

const findFirstAnimalInGrid = (grid, animal) => {
  const rowIndex = grid.findIndex(rowIncludes(animal))
  if (rowIndex === -1) return null
  return [rowIndex, ...findFirstAnimalInRow(grid[rowIndex], animal)]
}

/**
 * @param {*} player Player tableau
 * @param {*} animal String of animal
 * @returns array address [type, row, col, i] of how to find the animal
 */
export const findFirstAnimal = (player, animal) => {
  const landAnimal = findFirstAnimalInGrid(player.land, animal)
  if (landAnimal) {
    return ['land', ...landAnimal]
  }
  const dikeAnimal = findFirstAnimalInGrid(player.dikes, animal)
  if (dikeAnimal) {
    return ['dikes', ...dikeAnimal]
  }
  return null
}

export const slaughterAnimal = (player, animal) => {
  const address = findFirstAnimal(player, animal)
  if (address === null) return player
  const [grid, row, col, i] = address
  return {
    ...player,
    goods: {
      ...player.goods,
      hides: Math.min(player.goods.hides + 2, 15),
      food: Math.min(player.goods.food + animalFoodValue(animal), 30),
    },
    [grid]: [
      ...player[grid].slice(0, row),
      [
        ...player[grid][row].slice(0, col),
        {
          ...player[grid][row][col],
          contents: [
            ...player[grid][row][col].contents.slice(0, i),
            ...player[grid][row][col].contents.slice(i + 1),
          ],
        },
        ...player[grid][row].slice(col + 1),
      ],
      ...player[grid].slice(row + 1),
    ],
  }
}

export default ({ G, ctx: { currentPlayer }, args }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: [
      ...Array(args[0].sheep).fill('sheep'),
      ...Array(args[0].horses).fill('horse'),
      ...Array(args[0].cattle).fill('cattle'),
    ].reduce(slaughterAnimal, G.players[currentPlayer]),
  },
  action: null,
})
