import { compose } from 'redux'
import { addToken, addGoods, bumpTool } from '../common/player'
import { spendInventory } from '../common'
import { ToolUpgradeCosts } from '../constants'

const payForTool = ({ G, ctx, args: [{ tool }] }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        inventory: spendInventory(
          G.players[ctx.currentPlayer].inventory,
          ToolUpgradeCosts[tool]
        ),
      },
    },
  },
  ctx,
  args: [{ tool }],
})

const bumpToolComposable = ({ G, ctx, args: [{ tool }] }) =>
  bumpTool({ G, ctx }, tool)

const clearAction = ({ G, ctx, args }) => ({
  G: { ...G, action: null },
  ctx,
  args,
})

export default ({ G, ctx, args }) =>
  compose(
    bumpToolComposable,
    payForTool,
    clearAction
  )({ G, ctx, args }).G
