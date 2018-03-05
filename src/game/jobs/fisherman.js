import { compose } from 'redux'
import { addTokenSheep, bumpToolFishTraps } from '../common/player'

export default (G, ctx) =>
  compose(addTokenSheep, bumpToolFishTraps)({ G, ctx }).G
