import { ToolIncrements } from '../../game/constants'
import { cutPeatTimes } from '../common/state'

const cutPeatPerTraps = state => {
  const fishTraps =
    ToolIncrements.fishTraps[
      state.G.toolSpaces.fishTraps[Math.trunc(state.ctx.currentPlayer)]
    ]
  return cutPeatTimes(fishTraps)(state)
}

export default cutPeatPerTraps
