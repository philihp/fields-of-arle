import { compose } from 'redux'
import { addToken, addGoods, bumpTool } from '../common/player'

const addTokenSheep = ({ G, ctx }) => addToken({ G, ctx }, 'sheep')

const bumpToolFishTraps = ({ G, ctx }) => bumpTool({ G, ctx }, 'fishTraps')

const addFoodPerFishTraps = ({ G, ctx }) => {
  const index = G.toolSpaces.fishTraps[ctx.currentPlayer]
  const value = 100 + index // TODO
  return addGoods({ G, ctx }, 'food', value)
}

export default (G, ctx) =>
  compose(addFoodPerFishTraps, bumpToolFishTraps, addTokenSheep)({ G, ctx }).G
