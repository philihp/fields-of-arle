import { compose } from 'redux'
import { identity } from '../common/index'
import { applyToCurrentPlayer, curriedAddGoodsToPlayer } from '../common/player'
import { findSmallSpaceOccupiedBy } from '../common/barn'

export const size = 1

const findSmallSpaceOccupiedByPlow = findSmallSpaceOccupiedBy('plow')

const removeFirstPlow = player => {
  const space = findSmallSpaceOccupiedByPlow(player.barn)
  return {
    ...player,
    barn: {
      ...player.barn,
      [space]: null,
      // if reused on another vehicle, we would want to do something about the contents
      // but plows have no contents
    },
  }
}

const sellPlow = input => {
  if (input === null) return identity
  return compose(
    removeFirstPlow,
    curriedAddGoodsToPlayer('food', 8)
  )
}

export default conversionInputs =>
  applyToCurrentPlayer(sellPlow(conversionInputs[0]))
