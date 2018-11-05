import { compose } from 'redux'
import { applyToCurrentPlayer, inventoryAddToPlayer } from '../common/player'
import { toolBump } from '../common/state'
import { ToolIncrements } from '../../game/constants'

const addWoodPerTraps = state => {
  const fishTraps =
    ToolIncrements.fishTraps[
      state.G.toolSpaces.fishTraps[Math.trunc(state.ctx.currentPlayer)]
    ]
  return applyToCurrentPlayer(
    inventoryAddToPlayer(...new Array(fishTraps).fill('wood'))
  )(state)
}

export default compose(
  addWoodPerTraps,
  toolBump('fishTraps'),
  toolBump('fishTraps')
)
