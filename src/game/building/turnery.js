import { compose } from 'redux'
import { inventoryAddToPlayer, applyToCurrentPlayer } from '../common/player'
import { cutPeatTimes } from '../common/state'

const sum = (accum, n) => accum + n

const flatMap = (f, a) => a.map(f).reduce(sum, 0)

const cellIsForest = f => (f.type === 'forest' ? 1 : 0)

export default state => {
  const count = flatMap(
    row => flatMap(cellIsForest, row),
    state.G.players[state.ctx.currentPlayer].land
  )
  if (count === 0) return state
  return compose(
    applyToCurrentPlayer(
      inventoryAddToPlayer(...new Array(count).fill('wood'))
    ),
    cutPeatTimes(count)
  )(state)
}
