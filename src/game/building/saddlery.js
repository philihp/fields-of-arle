import { compose } from 'redux'
import { toolBump, cutPeatTimes } from '../common/state'
import { countAnimals, actionOption } from '../common/player'

export default state => {
  const count = countAnimals(state.G.players[state.ctx.currentPlayer]).horses
  return compose(toolBump('fleshingBeams'), cutPeatTimes(count))(state)
}
