const cellIncludes = animal => cell => cell.contents.includes(animal)
const rowIncludes = animal => row => row.some(cellIncludes(animal))

const findFirstAnimalInRow = animal => row => {
  const colIndex = row.findIndex(cellIncludes(animal))
  if (colIndex === -1) return null
  return [colIndex, row[colIndex].contents.indexOf(animal)]
}

const findFirstAnimalInGrid = animal => grid => {
  const rowIndex = grid.findIndex(rowIncludes(animal))
  if (rowIndex === -1) return null
  return [rowIndex, ...findFirstAnimalInRow(animal)(grid[rowIndex])]
}

/**
 * @returns array address [type, row, col, i] of how to find the animal
 */
export const findFirstAnimal = animal => {
  const findAnimalIn = findFirstAnimalInGrid(animal)
  return player => {
    const landAnimal = findAnimalIn(player.land)
    if (landAnimal) {
      return ['land', ...landAnimal]
    }
    const dikeAnimal = findAnimalIn(player.dikes)
    if (dikeAnimal) {
      return ['dikes', ...dikeAnimal]
    }
    return null
  }
}

export const removeFirstAnimal = animal => player => {
  const address = findFirstAnimal(animal)(player)
  if (address === null) return player
  // if (address === null) {
  //   console.warn('unable to find animal to remove')
  //   return player
  // }
  const [grid, row, col, i] = address
  return {
    ...player,
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

export const removeFirstAnimalReducer = (player, animal) =>
  removeFirstAnimal(animal)(player)
