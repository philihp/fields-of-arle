import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
  spendGoodsFromPlayer,
} from '../common/player'
import { removeFirstAnimal } from '../common/animals'

const convertHide = input => {
  if (input === null) return identity
  return compose(
    spendGoodsFromPlayer(input),
    curriedAddGoodsToPlayer('food', 2)
  )
}

const convertGrains = input => {
  if (input === null) return identity
  return compose(
    spendGoodsFromPlayer(input),
    curriedAddGoodsToPlayer('food', 4)
  )
}

const convertLinen = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 4)
  )
}

export const size = 2

export default conversionInputs =>
  applyToCurrentPlayer(
    compose(
      convertHide(conversionInputs[0]),
      convertGrains(conversionInputs[1]),
      convertLinen(conversionInputs[2])
    )
  )
