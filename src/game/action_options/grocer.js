import { addToken, addInventory } from '../common/player'

export default ({ G, ctx, args }) => {
  if (['timber', 'brick'].includes(args)) {
    return {
      ...addInventory({ G, ctx }, args).G,
      action: null,
    }
  } else {
    return {
      ...addToken({ G, ctx }, args).G,
      action: null,
    }
  }
}
