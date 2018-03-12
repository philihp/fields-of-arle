import { compose } from 'redux'
import { addToken, addGoods, bumpTool } from '../common/player'
import { toolValue } from '../tool_increments'

export default (G, { currentPlayer }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: {
      ...G.players[currentPlayer],
      inventory: [
        ...G.players[currentPlayer].inventory,
        ...Array(
          toolValue('shovels', G.toolSpaces.shovelPairs[currentPlayer])
        ).fill('clay'),
      ],
    },
  },
})
