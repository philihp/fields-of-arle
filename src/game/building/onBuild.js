import {
  curriedAddGoodsToPlayer,
  applyToCurrentPlayer,
  inventoryAdd,
} from '../common/player'

const mill = state => {
  const { G, ctx, ...args } = state
  const fieldCount = G.players[ctx.currentPlayer].land
    .flat()
    .map(cell => cell.type)
    .filter(type => ['grain', 'flax'].includes(type)).length
  if (fieldCount >= 6) {
    return applyToCurrentPlayer(curriedAddGoodsToPlayer('food', 12))(state)
  } else if (fieldCount >= 5) {
    return applyToCurrentPlayer(curriedAddGoodsToPlayer('food', 10))(state)
  } else if (fieldCount >= 3) {
    return applyToCurrentPlayer(curriedAddGoodsToPlayer('food', 8))(state)
  } else {
    return state
  }
}

const textileHouse = inventoryAdd('linen', 'woolen', 'leather')

const onBuild = {
  mill,
  textileHouse,
}

export default building => onBuild[building] || (state => state)
