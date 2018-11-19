import { identity } from '../common/index'
import mill from './mill'
import weavingMill from './weavingMill'
import gulfHouseInn from './gulfHouseInn'
import cooperage from './cooperage'
import waterfrontHouse from './waterfrontHouse'
import villageChurch from './villageChurch'
import sluiceYardInn from './sluiceYardInn'
import saddlery from './saddlery'
import turnery from './turnery'
import milkHouseInn from './milkHouseInn'
import smokehouse from './smokehouse'
import berumCastle from './berumCastle'
import bakehouse from './bakehouse'
import smithy from './smithy'
import textileHouse from './textileHouse'

const onBuild = {
  mill,
  weavingMill,
  textileHouse,
  gulfHouseInn,
  cooperage,
  waterfrontHouse,
  villageChurch,
  sluiceYardInn,
  saddlery,
  turnery,
  milkHouseInn,
  smokehouse,
  berumCastle,
  bakehouse,
  smithy,
}

export default building =>
  onBuild[building] !== undefined ? onBuild[building] : identity
