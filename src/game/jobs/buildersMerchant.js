import { compose } from 'redux'
import { setAction, addGoods } from '../common/player'

const addHides = ({ G, ctx, ...args }) => ({
  ...addGoods({ G, ctx }, 'hides', 2),
  ...args,
})

export default (G, ctx, ...args) =>
  compose(
    setAction,
    addHides
  )({ G, ctx, ...args }).G
