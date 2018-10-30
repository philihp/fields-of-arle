import { compose } from 'redux'
import { actionOption } from '../common/player'

const actions = {
  build: [actionOption('summerLaborBuild')],
  imitate: [actionOption('summerImitating')],
}

export default ({ G, ctx, args: [action] }) =>
  compose(...actions[action])({ G, ctx }).G
