import { removePeatFromCoord, flipEmptyMoors } from './peatCutter'
import { possiblePeatLocations } from '../constants'

export default ({ G, ctx, args }) => {
  const [toDrain, item] = args
  console.log('toDrain: ', toDrain)
  console.log('item: ', item)
  return {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        tokens: [...G.players[ctx.currentPlayer], item],
        land: possiblePeatLocations.reduce(
          flipEmptyMoors,
          removePeatFromCoord(G.players[ctx.currentPlayer].land, toDrain)
        ),
      },
    },
    action: null,
  }
}
