import { compose } from 'redux'
import { addInventory, setAction } from '../common/player'

const addInventoryWood = ({ G, ctx, ...args }) =>
  addInventory({ G, ctx, ...args }, ['wood'])

const addInventoryClay = ({ G, ctx, ...args }) =>
  addInventory({ G, ctx, ...args }, ['clay'])

export default (G, ctx, ...args) =>
  compose(setAction, addInventoryWood, addInventoryClay)({
    G,
    ctx,
    0: 'winterGrocer',
  }).G
