import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
} from '../common/player'
import { removeFirstAnimal } from '../common/animals'

const convertLeather = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer('leather'),
    curriedAddGoodsToPlayer('food', 4)
  )
}

const convertAnimal = input => {
  if (input === null) return identity
  const [animal] = input
  return compose(
    removeFirstAnimal(animal),
    curriedAddGoodsToPlayer('food', 4)
  )
}

const convertHorse = input => {
  if (input === null) return identity
  return compose(
    removeFirstAnimal('horse'),
    curriedAddGoodsToPlayer('food', 5)
  )
}

export default conversionInputs =>
  applyToCurrentPlayer(
    compose(
      convertLeather(conversionInputs[0]),
      convertAnimal(conversionInputs[1]),
      convertHorse(conversionInputs[2])
    )
  )
