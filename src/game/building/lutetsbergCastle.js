import { compose } from 'redux'
import { toolBump } from '../common/state'
import { actionOption } from '../common/player'

export default compose(
  toolBump('potteryWheels'),
  toolBump('spades'),
  toolBump('workbenches'),
  actionOption('foresterPlace')
)
