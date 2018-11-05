import { inventoryAdd } from '../common/player'
import { identity } from '../common/index'
import mill from './mill'
import weavingMill from './weavingMill'
import gulfHouseInn from './gulfHouseInn'
import cooperage from './cooperage'
import waterfrontHouse from './waterfrontHouse'

const textileHouse = inventoryAdd('linen', 'woolen', 'leather')

const onBuild = {
  mill,
  weavingMill,
  textileHouse,
  gulfHouseInn,
  cooperage,
  waterfrontHouse,
}

export default building =>
  onBuild[building] !== undefined ? onBuild[building] : identity
