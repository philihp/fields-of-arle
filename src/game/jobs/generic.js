import { compose } from 'redux'
import { setAction } from '../common/player'

export default (G, ctx, ...args) => compose(setAction)({ G, ctx, ...args }).G
