import { curriedAddGoodsToPlayer, applyToCurrentPlayer } from '../common/player'

const add12Food = curriedAddGoodsToPlayer('food', 12)
const add10Food = curriedAddGoodsToPlayer('food', 10)
const add8Food = curriedAddGoodsToPlayer('food', 8)

export default applyToCurrentPlayer(player => {
  const fieldCount = player.land
    .flat()
    .map(cell => cell.type)
    .filter(type => ['grain', 'flax'].includes(type)).length
  if (fieldCount >= 6) {
    return add12Food(player)
  } else if (fieldCount >= 5) {
    return add10Food(player)
  } else if (fieldCount >= 3) {
    return add8Food(player)
  } else {
    return player
  }
})
