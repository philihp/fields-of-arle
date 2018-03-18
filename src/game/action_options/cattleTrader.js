import { addToken } from '../common/player'

const addItemFromArgument = ({ G, ctx, args }) => {
  const [item] = args
  return addToken({ G, ctx, args }, item)
}

export default ({ G, ctx, args }) => {
  return {
    ...addItemFromArgument({ G, ctx, args }).G,
    action: null,
  }
}
