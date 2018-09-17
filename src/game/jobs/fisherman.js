import { compose } from 'redux'
import { addToken, addGoods, bumpTool } from '../common/player'
import { toolValue } from '../constants'

const addTokenSheep = ({ G, ctx }) => addToken({ G, ctx }, 'sheep')

const bumpToolFishTraps = ({ G, ctx }) => bumpTool({ G, ctx }, 'fishTraps')

const addFoodPerFishTraps = ({ G, ctx }) =>
  addGoods(
    { G, ctx },
    'food',
    toolValue('fishTraps', G.toolSpaces.fishTraps[ctx.currentPlayer])
  )

export default (G, ctx) =>
  compose(
    addFoodPerFishTraps,
    bumpToolFishTraps,
    addTokenSheep
  )({ G, ctx }).G
