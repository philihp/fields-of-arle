import { toolValue } from '../constants'

export default (G, { currentPlayer }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: {
      ...G.players[currentPlayer],
      inventory: [
        ...G.players[currentPlayer].inventory,
        ...Array(toolValue('axes', G.toolSpaces.axes[currentPlayer])).fill(
          'wood'
        ),
      ],
    },
  },
})
