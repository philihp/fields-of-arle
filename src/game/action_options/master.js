import { removeFirstItems } from '../common'
import { afford, spend } from '../../game/common'
import { ToolUpgradeCosts } from '../../game/constants'

export default ({ G, ctx: { currentPlayer }, args }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: {
      ...G.players[currentPlayer],
      inventory: args.reduce(
        (inventory, tool) => spend(inventory, ToolUpgradeCosts[tool]),
        G.players[currentPlayer].inventory
      ),
    },
  },
  action: null,
})
