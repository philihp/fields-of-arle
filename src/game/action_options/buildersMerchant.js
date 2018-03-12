import { addToken, addInventory } from '../common/player'

export default ({ G, ctx, args }) => {
  return {
    ...addInventory({ G, ctx }, args).G,
    action: null,
  }
}
