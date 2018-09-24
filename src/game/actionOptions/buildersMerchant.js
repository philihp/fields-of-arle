import { addInventory } from '../common/player'

export default ({ G, ctx, args }) => ({
  ...addInventory({ G, ctx }, args).G,
  action: null,
})
