import { compose } from 'redux'
import { toolBump } from '../common/state'
import { countAnimals, actionOption } from '../common/player'

const cutPeatTimes = ({ G, ctx, horseCount, ...args }) => ({
  G: {
    ...G,
    times: horseCount,
  },
  ctx,
  ...args,
})

const countHorses = ({ G, ctx, ...args }) => ({
  G,
  ctx,
  horseCount: countAnimals(G.players[ctx.currentPlayer]).horses,
  ...args,
})

export default compose(
  toolBump('fleshingBeams'),
  cutPeatTimes,
  countHorses,
  actionOption('peatCutter')
)
