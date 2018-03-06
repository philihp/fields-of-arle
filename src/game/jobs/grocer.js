import { compose } from 'redux'
// import { addToken, addGoods, bumpTool } from '../common/player'

const setAction = ({ G, ctx, ...args }) => {
  return {
    G: {
      ...G,
      action: args[0],
    },
    ctx,
  }
}

export default (G, ctx, ...args) => compose(setAction)({ G, ctx, ...args }).G
