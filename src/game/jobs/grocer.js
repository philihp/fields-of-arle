import { compose } from 'redux'
import { setAction, addInventory, addGoods } from '../common/player'

const addGrain = ({ G, ctx, ...args }) => ({
  ...addGoods({ G, ctx }, 'grain', 1),
  ...args,
})

const addLeather = ({ G, ctx, ...args }) => ({
  ...addInventory({ G, ctx }, ['leather']),
  ...args,
})

export default (G, ctx, ...args) =>
  compose(setAction, addLeather, addGrain)({ G, ctx, ...args }).G
