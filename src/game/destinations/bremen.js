import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
  spendGoodsFromPlayer,
} from '../common/player'
import { removeFirstAnimal } from '../common/animals'

const findLocationOf = moor => {
  if (moor === 'boardwalk') return [[4, 1]]
  const [_, colStr] = moor.split('-')
  return [[5, Math.trunc(colStr)], [6, Math.trunc(colStr)]]
}

const killMoorCell = (land, [row, col]) => [
  ...land.slice(0, row),
  [
    ...land[row].slice(0, col),
    {
      type: 'empty',
      contents: [],
    },
    ...land[row].slice(col + 1),
  ],
  ...land.slice(row + 1),
]

const killMoor = moor => player => {
  const cellsToKill = findLocationOf(moor[0])
  return {
    ...player,
    land: cellsToKill.reduce(killMoorCell, player.land),
  }
}

const convertMoor = input => {
  if (input === null) return identity
  return killMoor(input)
}

const convertTimber = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 5)
  )
}
const convertAnimalPair = input => {
  if (input === null) return identity
  return compose(
    removeFirstAnimal(input[0]),
    removeFirstAnimal(input[1]),
    curriedAddGoodsToPlayer('food', 9)
  )
}

const convertMaterialSet = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 12)
  )
}

const convertClothingSet = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 30)
  )
}

export const size = 4

export default conversionInputs =>
  applyToCurrentPlayer(
    compose(
      convertMoor(conversionInputs[0]),
      convertTimber(conversionInputs[1]),
      convertAnimalPair(conversionInputs[2]),
      convertMaterialSet(conversionInputs[3]),
      convertClothingSet(conversionInputs[4])
    )
  )
