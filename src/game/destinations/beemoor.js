import { compose } from 'redux'
import { identity } from '../common/index'
import {
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  inventorySpendFromPlayer,
} from '../common/player'

export const size = 1

const sellPeat = input => {
  if (input === null) return identity
  return compose(
    inventorySpendFromPlayer('peat'),
    curriedAddGoodsToPlayer('food', 2)
  )
}

export default conversionInputs =>
  applyToCurrentPlayer(sellPeat(conversionInputs[0]))
