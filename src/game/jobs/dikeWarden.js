import { compose } from 'redux'
import { setAction } from '../common/player'
import { buildDikes } from '../common/land'

export default (G, ctx, ...args) =>
  compose(setAction, buildDikes(1))({ G, ctx, 0: 'dikeWarden' }).G
