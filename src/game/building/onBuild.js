import { inventoryAdd } from '../common/player'
import { identity } from '../common/index'
import mill from './mill'
import weavingMill from './weavingMill'
import gulfHouseInn from './gulfHouseInn'
import cooperage from './cooperage'
import waterfrontHouse from './waterfrontHouse'
import villageChurch from './villageChurch'
import sluiceYardInn from './sluiceYardInn'

const textileHouse = inventoryAdd('linen', 'woolen', 'leather')

const onBuild = {
  mill,
  weavingMill,
  textileHouse,
  gulfHouseInn,
  cooperage,
  waterfrontHouse,
  villageChurch,
  sluiceYardInn,
}

export default building =>
  onBuild[building] !== undefined ? onBuild[building] : identity
