import { addInventory } from '../common/player'
import { spendInventory } from '../common'
import { ToolUpgradeCosts } from '../constants'

export default ({ G, ctx, args }) => {
  const [arg] = args
  if (arg === undefined) {
    return { ...G, action: null }
  }
  const { tool } = arg
  // TODO do that stuff below -- advance the toolspace and pay the cost
  return G
}

// ({
//   ...G,
//   toolSpaces: args.reduce((toolSpaces, tool) => {
//     const newTools = toolSpaces[tool].slice()
//     newTools[currentPlayer] += 1
//     return {
//       ...toolSpaces,
//       [tool]: newTools,
//     }
//   }, G.toolSpaces),
//   players: {
//     ...G.players,
//     [currentPlayer]: {
//       ...G.players[currentPlayer],
//       inventory: args.reduce(
//         (inventory, tool) => spendInventory(inventory, ToolUpgradeCosts[tool]),
//         G.players[currentPlayer].inventory
//       ),
//     },
//   },
//   action: null,
// })
