import { addToken } from '../common/player'

export default ({ G, ctx, args }) => {
  return {
    ...addToken({ G, ctx }, args).G,
    action: null,
  }
}
