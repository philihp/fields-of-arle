import { compose } from 'redux'
import { inventoryAdd, actionOption } from '../common/player'

const actions = {
  wood: [inventoryAdd('wood', 'wood', 'wood', 'wood'), actionOption(null)],
  building: [actionOption('builder')],
}

export default ({ G, ctx, args: [action] }) =>
  compose(...actions[action])({ G, ctx }).G
