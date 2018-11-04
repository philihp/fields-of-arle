import { compose } from 'redux'
import { inventoryAdd, toolBump } from '../common/player'

export default compose(
  inventoryAdd('winterWear'),
  toolBump('weavingLooms'),
  toolBump('weavingLooms')
)
