import { arrangeItem } from '../common/land'

export default (G, ctx, args) => {
  // TODO: if in the middle of another action, don't allow?? because when this ends, then it doesn't go back to action.
  if (args === undefined) {
    // if nothing, toggle showing the option pane
    return {
      ...G,
      action: G.action === 'arrange' ? null : 'arrange',
    }
  }
  return arrangeItem({ G, ctx }, args)
}
