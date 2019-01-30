import { compose } from 'redux'
import peatCutter from './peatCutter'
import { passIfNoOtherWorkshops } from './workshop'
import { actionOption } from '../common/player'

const cutPeat = ({ G, ctx, ...args }) => ({
  G: peatCutter({ G, ctx, args: args.args }),
  ctx,
  ...args,
})

export default ({ G, ctx, ...args }) =>
  compose(
    passIfNoOtherWorkshops,
    cutPeat,
    actionOption(null)
  )({ G, ctx, ...args }).G
