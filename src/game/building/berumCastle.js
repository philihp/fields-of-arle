import { compose } from 'redux'
import { toolBump } from '../common/state'
import { actionOption } from '../common/player'

export default compose(
  actionOption('warden'),
  toolBump('ovens'),
  toolBump('weavingLooms')
)
