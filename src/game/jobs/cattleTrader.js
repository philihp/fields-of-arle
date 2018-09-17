import { compose } from 'redux'
import { setAction, addToken, addGoods } from '../common/player'

const addTwoFood = ({ G, ctx, ...args }) =>
  addGoods({ G, ctx, ...args }, 'food', 2)

const addSheep = ({ G, ctx, ...args }) => addToken({ G, ctx, ...args }, 'sheep')

export default (G, ctx, ...args) =>
  compose(
    setAction,
    addTwoFood,
    addSheep
  )({ G, ctx, ...args }).G
