import { compose } from 'redux'
import {
  actionOption,
  applyToCurrentPlayer,
} from '../common/player'
import { VehicleSource } from '../common/vehicle'
import { VehicleSlots } from '../common/barn'

const removeVehicleFromPlayer = space => player => ({
  ...player,
  barn: {
    ...player.barn,
    [space]: null,
  },
})

const addVehicleToPlayer = (space, type) => player => ({
  ...player,
  barn: {
    ...player.barn,
    [space]: { type, contents: VehicleSlots[type] },
  },
})

const modifyVehicleSupply = (type, amount) => state => {
  const toStack = VehicleSource[type]
  return {
    ...state,
    G: {
      ...state.G,
      supplies: {
        ...state.G.supplies,
        [toStack]: state.G.supplies[toStack] + amount,
      },
    },
  }
}

const convertToPlow = (state, space) => {
  const { G, ctx } = state
  const barn = G.players[ctx.currentPlayer].barn
  if (barn[space] === null) return state
  return compose(
    applyToCurrentPlayer(addVehicleToPlayer(space, 'plow')),
    modifyVehicleSupply('plow', -1),
    modifyVehicleSupply(barn[space].type, +1),
    applyToCurrentPlayer(removeVehicleFromPlayer(space))
  )(state)
}

const convertSpacesToPlows = state => {
  const { G, ctx, ...args } = state
  const [spacesToConvert] = args.args
  return spacesToConvert.reduce(convertToPlow, state)
}

export default state =>
  compose(convertSpacesToPlows, actionOption(null))(state).G
