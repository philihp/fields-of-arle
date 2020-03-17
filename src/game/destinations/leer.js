import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
  spendGoodsFromPlayer,
} from '../common/player'
import { removeFirstAnimal } from '../common/animals'

const convertFlax = input => player => {
  if (input === null) {
    return player // identity
  }
  const player2 = curriedAddGoodsToPlayer('food', 2)(player)
  const player3 = spendGoodsFromPlayer(input)(player2)

  return player3
  // return compose(
  //   spendGoodsFromPlayer(input),
  //   curriedAddGoodsToPlayer('food', 2)
  // )
}

const convertWoolen = input => player => {
  if (input === null) return player // identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 3)
  )(player)
}

const convertCattle = input => {
  if (input === null) return identity
  const [animal] = input
  return compose(removeFirstAnimal(animal), curriedAddGoodsToPlayer('food', 5))
}

const convertClothing = input => player => {
  if (input === null) return player // identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 6)
  )(player)
}

export const size = 3

export default conversionInputs =>
  applyToCurrentPlayer(player =>
    compose(
      convertFlax(conversionInputs[0]),
      convertWoolen(conversionInputs[1]),
      convertCattle(conversionInputs[2]),
      convertClothing(conversionInputs[3])
    )(player)
  )
