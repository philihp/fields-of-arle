import { compose } from 'redux'
import { repeat } from '../common/index'
import {
  actionOption,
  applyToCurrentPlayer,
  curriedAddGoodsToPlayer,
  spendGoodsFromPlayer,
} from '../common/player'

export default ({ G, ctx, ...args }) => {
  const [times] = args.args
  return compose(
    actionOption(null),
    ...repeat(
      times,
      applyToCurrentPlayer(curriedAddGoodsToPlayer('food', 8)),
      applyToCurrentPlayer(spendGoodsFromPlayer(['flax', 'grain', 'grain']))
    )
  )({ G, ctx, ...args }).G
}
