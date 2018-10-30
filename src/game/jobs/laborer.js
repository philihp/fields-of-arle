import { compose } from 'redux'
import {
  curriedAddGoodsToPlayer,
  setAction,
  applyToCurrentPlayer,
} from '../common/player'

const consume2Food = applyToCurrentPlayer(curriedAddGoodsToPlayer('food', -2))

export default (G, ctx, ...args) =>
  compose(
    consume2Food,
    setAction
  )({ G, ctx, ...args }).G
