import { compose } from 'redux'
import { applyToCurrentPlayer, curriedAddGoodsToPlayer } from '../common/player'
import { buildDikes } from '../common/land'
import { toolBump } from '../common/state'

export default compose(
  applyToCurrentPlayer(player =>
    compose(curriedAddGoodsToPlayer('food', 10))(player)
  ),
  toolBump('fishTraps'),
  toolBump('fishTraps'),
  toolBump('fishTraps'),
  buildDikes(2)
)
