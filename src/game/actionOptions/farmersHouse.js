import { compose } from 'redux'
import { addToken, addGoods, bumpTool } from '../common/player'
import { spendInventory } from '../common'
import { ToolUpgradeCosts } from '../constants'

const cutPeat = ({ G, ctx }) => ({
  G,
  ctx,
})

const clearAction = ({ G, ctx }) => ({
  G: { ...G, action: null },
  ctx,
})

export default ({ G, ctx }) =>
  compose(
    acquireClay,
    cutPeat,
    clearAction
  )({ G, ctx, args }).G
