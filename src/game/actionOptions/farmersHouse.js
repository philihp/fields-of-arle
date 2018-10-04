import { compose } from 'redux'
import peatCutter from './peatCutter'
import { passIfNoOtherWorkshops } from './workshop'

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
    passIfNoOtherWorkshops,
    cutPeat,
    clearAction
  )({ G, ctx, ...args }).G
