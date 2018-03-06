import { compose } from 'redux'
// import { addToken, addGoods, bumpTool } from '../common/player'

const identity = i => i

export default (G, ctx) => compose(identity)({ G, ctx }).G
