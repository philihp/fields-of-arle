import { spend } from '../../game/common'
import { ToolUpgradeCosts } from '../../game/constants'

export default ({ G, ctx: { currentPlayer }, args }) => {
  const toolSpaces = args.reduce((toolSpaces, tool) => {
    const newTools = toolSpaces[tool].slice()
    newTools[currentPlayer]++
    return {
      ...toolSpaces,
      [tool]: newTools,
    }
  }, G.toolSpaces)

  return {
    ...G,
    toolSpaces,
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
  }
}
