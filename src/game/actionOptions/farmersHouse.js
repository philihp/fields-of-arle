import { compose } from 'redux'
import peatCutter from './peatCutter'

const cutPeat = ({ G, ctx, ...args }) => ({
  G: peatCutter({ G, ctx, args: args.args }),
  ctx,
  ...args,
})

const clearAction = ({ G, ctx, ...args }) => ({
  G: { ...G, action: null },
  ctx,
  ...args,
})

export default ({ G, ctx, ...args }) =>
  compose(
    cutPeat,
    clearAction
  )({ G, ctx, ...args }).G
