import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
} from '../common/player'
import { findSmallSpaceOccupiedBy } from '../common/barn'
import { removeFirstAnimal } from '../common/animals'

const convertSheep = input => {
  if (input === null) return identity
  return compose(
    removeFirstAnimal('sheep'),
    curriedAddGoodsToPlayer('food', 4)
  )
}

const findSmallSpaceOccupiedByPlow = findSmallSpaceOccupiedBy('peatBoat')

const removeFirstPeatBoat = player => {
  const space = findSmallSpaceOccupiedByPlow(player.barn)
  return {
    ...player,
    barn: {
      ...player.barn,
      [space]: null,
      // if reused on another vehicle, we would want to do something about the contents
      // but peatBoats have no contents
    },
  }
}

const convertPeatBoat = input => {
  if (input === null) return identity
  return compose(
    removeFirstPeatBoat,
    curriedAddGoodsToPlayer('food', 5)
  )
}

const convertWinterWear = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', 7)
  )
}

export const size = 2

export default conversionInputs =>
  applyToCurrentPlayer(
    compose(
      convertSheep(conversionInputs[0]),
      convertPeatBoat(conversionInputs[1]),
      convertWinterWear(conversionInputs[2])
    )
  )
