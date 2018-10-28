import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
} from '../common/player'

const convert = food => input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer(...input),
    curriedAddGoodsToPlayer('food', food)
  )
}

export const size = 3

export default conversionInputs =>
  applyToCurrentPlayer(player =>
    compose(
      convert(3)(conversionInputs[0]),
      convert(6)(conversionInputs[1]),
      convert(7)(conversionInputs[2]),
      convert(7)(conversionInputs[3])
    )(player)
  )
