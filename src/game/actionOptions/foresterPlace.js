import { compose } from 'redux'
import { actionOption } from '../common/player'
import { place } from '../common/land'

export default ({ G, ctx, ...args }) =>
  compose(actionOption(null), place('forest'))({ G, ctx, ...args }).G
