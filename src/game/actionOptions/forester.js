import { compose } from 'redux'
import { inventoryAdd, actionOption } from '../common/player'

const actions = {
  forest: [actionOption('foresterPlace')],
  building: [actionOption('builder')],
}

export default ({ G, ctx, args: [action] }) =>
  compose(...actions[action])({ G, ctx }).G
