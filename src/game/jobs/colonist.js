import { compose } from 'redux'
import { setAction, addToken } from '../common/player'

const addTokenHorse = ({ G, ctx, ...args }) =>
  addToken({ G, ctx, ...args }, 'horse')

export default (G, ctx, ...args) =>
  compose(setAction, addTokenHorse)({ G, ctx, 0: 'colonist' }).G
