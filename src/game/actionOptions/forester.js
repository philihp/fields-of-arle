import { compose } from 'redux'
import { actionOption } from '../common/player'

const actions = {
  forest: [actionOption('foresterPlace')],
  building: [actionOption('builder')],
}

export default ({ G, ctx, args: [action] }) =>
  compose(...actions[action])({ G, ctx }).G
