import { toolValue } from '../constants'

export default (G, { currentPlayer }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: {
      ...G.players[currentPlayer],
      inventory: [
        ...G.players[currentPlayer].inventory,
        ...Array(
          toolValue('shovels', G.toolSpaces.shovels[currentPlayer])
        ).fill('clay'),
      ],
    },
  },
})
