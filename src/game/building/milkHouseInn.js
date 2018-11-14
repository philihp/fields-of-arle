import { compose } from 'redux'
import {
  inventoryAddToPlayer,
  addTokenToPlayer,
  applyToCurrentPlayer,
  countAnimals,
} from '../common/player'
import { cutPeatTimes } from '../common/state'

export default state => {
  const count =
    countAnimals(state.G.players[state.ctx.currentPlayer]).cattle + 1
  return compose(
    applyToCurrentPlayer(addTokenToPlayer('cattle')),
    applyToCurrentPlayer(
      inventoryAddToPlayer(...new Array(count).fill('wood'))
    ),
    cutPeatTimes(count)
  )(state)
}
