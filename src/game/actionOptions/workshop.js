import { compose } from 'redux'
import { bumpTool } from '../common/player'
import { spendInventory } from '../common'
import { ToolUpgradeCosts } from '../constants'
import { playersWorkshops } from '../building/workshop'

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

export const passIfNoOtherWorkshops = ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    passed: {
      ...G.passed,
      [ctx.currentPlayer]:
        G.usedWorkshops.length ===
        playersWorkshops(G.players[ctx.currentPlayer]).length,
    },
  },
  ctx,
  ...args,
})

export default ({ G, ctx, args }) =>
  compose(
    passIfNoOtherWorkshops,
    bumpToolComposable,
    payForTool,
    clearAction
  )({ G, ctx, args }).G
