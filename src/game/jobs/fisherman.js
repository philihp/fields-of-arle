import { compose } from 'redux'
import { addToken, addGoods } from '../common/player'
import { toolBump } from '../common/state'
import { toolValue } from '../constants'

const addTokenSheep = ({ G, ctx }) => addToken({ G, ctx }, 'sheep')

const addFoodPerFishTraps = ({ G, ctx }) =>
  addGoods(
    { G, ctx },
    'food',
    toolValue('fishTraps', G.toolSpaces.fishTraps[ctx.currentPlayer])
  )

export default (G, ctx) =>
  compose(
    addFoodPerFishTraps,
    toolBump('fishTraps'),
    addTokenSheep
  )({ G, ctx }).G
