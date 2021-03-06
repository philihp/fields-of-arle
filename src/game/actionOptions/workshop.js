import { compose } from 'redux'
import { toolBump } from '../common/state'
import { spendInventory } from '../common'
import { actionOption } from '../common/player'
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

const bumpToolComposable = ({ G, ctx, ...args }) =>
  toolBump(args.args[0].tool)({ G, ctx, ...args })

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
    actionOption(null)
  )({ G, ctx, args }).G
