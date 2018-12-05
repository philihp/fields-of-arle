import { compose } from 'redux'
import { actionOption } from '../common/player'

export default state => compose(actionOption('farmersInn'))(state)
