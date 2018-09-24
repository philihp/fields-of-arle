import { addToken, addInventory } from '../common/player'

export default ({ G, ctx, args }) => {
  const [item] = args
  if (['timber', 'brick'].includes(item)) {
    return {
      ...addInventory({ G, ctx }, [item]).G,
      action: null,
    }
  } else {
    return {
      ...addToken({ G, ctx }, item).G,
      action: null,
    }
  }
}
