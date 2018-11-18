import { compose } from 'redux'
import {
  inventoryAddToPlayer,
  addTokenToPlayer,
  applyToCurrentPlayer,
} from '../common/player'
import { countVehicle } from '../common/barn'

export default state => {
  const peatBoats = countVehicle(
    state.G.players[state.ctx.currentPlayer].barn,
    'peatBoat'
  )
  const plows = countVehicle(
    state.G.players[state.ctx.currentPlayer].barn,
    'plow'
  )
  return compose(
    applyToCurrentPlayer(addTokenToPlayer(...new Array(plows).fill('horse'))),
    applyToCurrentPlayer(
      inventoryAddToPlayer(...new Array(peatBoats * 2).fill('peat'))
    )
  )(state)
}
