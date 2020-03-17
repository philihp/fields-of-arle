import { compose } from 'redux'
import {
  inventoryAddToPlayer,
  landOfType,
  applyToCurrentPlayer,
} from '../common/player'

const perStableOneBrick = player =>
  inventoryAddToPlayer(landOfType('stable')(player.land).map(() => 'brick'))(
    player
  )

const perStallOneTimber = player =>
  inventoryAddToPlayer(landOfType('stall')(player.land).map(() => 'timber'))(
    player
  )

const perDoubleStallTwoTimber = player =>
  inventoryAddToPlayer(
    landOfType('doubleStall')(player.land).map(() => 'timber')
  )(player)

export default applyToCurrentPlayer(
  compose(perStableOneBrick, perStallOneTimber, perDoubleStallTwoTimber)
)
