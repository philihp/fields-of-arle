import { compose } from 'redux'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  countAnimals,
} from '../common/player'

const countOfDairyAnimals = player => {
  const count = countAnimals(player)
  return count.sheep + count.cattle
}

const countToGoodsAdded = player => {
  const count = countOfDairyAnimals(player)
  return [count >= 15, count >= 10, count >= 5].reduce(
    (total, meetsThreshold) => total + (meetsThreshold ? 1 : 0),
    0
  )
}

// TODO: this should iterate through the goods, instead of enumerating them here
const addDairyAnimalGoods = player => {
  const count = countToGoodsAdded(player)
  return compose(
    curriedAddGoodsToPlayer('food', count),
    curriedAddGoodsToPlayer('food', count),
    curriedAddGoodsToPlayer('wool', count),
    curriedAddGoodsToPlayer('flax', count),
    curriedAddGoodsToPlayer('hide', count),
    curriedAddGoodsToPlayer('grain', count)
  )(player)
}

export default applyToCurrentPlayer(addDairyAnimalGoods)
