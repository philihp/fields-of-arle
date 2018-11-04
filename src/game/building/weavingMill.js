import { compose } from 'redux'
import { toolBump } from '../common/state'
import { inventoryAdd } from '../common/player'

export default compose(
  inventoryAdd('winterWear'),
  toolBump('weavingLooms'),
  toolBump('weavingLooms')
)
