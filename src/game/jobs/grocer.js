import { compose } from 'redux'
import { addInventory, addGoods } from '../common/player'

const setAction = ({ G, ...args }) => {
  return {
    G: {
      ...G,
      action: args[0],
    },
    ...args,
  }
}

const addGrain = ({ G, ctx, ...args }) => {
  return {
    ...addGoods({ G, ctx }, 'grain', 1),
    ...args,
  }
}

const addLeather = ({ G, ctx, ...args }) => {
  return {
    ...addInventory({ G, ctx }, 'leather'),
    ...args,
  }
}

export default (G, ctx, ...args) =>
  compose(setAction, addLeather, addGrain)({ G, ctx, ...args }).G
