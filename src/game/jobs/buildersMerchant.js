import { compose } from 'redux'
import { setAction, addGoods } from '../common/player'

const addHide = ({ G, ctx, ...args }) => ({
  ...addGoods({ G, ctx }, 'hide', 2),
  ...args,
})

export default (G, ctx, ...args) =>
  compose(setAction, addHide)({ G, ctx, ...args }).G
