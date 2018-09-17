import { compose } from 'redux'
import { addInventory } from '../common/player'
import { countVehicle } from '../common/barn'

const addBasePeat = ({ G, ctx }) =>
  addInventory({ G, ctx }, ['peat', 'peat', 'peat'])

const addPeatPerBoat = ({ G, ctx }) =>
  addInventory(
    { G, ctx },
    Array(countVehicle(G.players[ctx.currentPlayer].barn, 'peatBoat')).fill(
      'peat'
    )
  )

export default (G, ctx) =>
  compose(
    addBasePeat,
    addPeatPerBoat
  )({ G, ctx }).G
