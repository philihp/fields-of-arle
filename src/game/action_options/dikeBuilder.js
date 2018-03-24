import { addToken } from '../common/player'
import { buildDikes } from '../common/land'
import { toolValue } from '../constants'

export default ({ G, ctx, args }) => {
  const [item] = args
  const times = toolValue(
    'shovelPairs',
    G.toolSpaces['shovels'][ctx.currentPlayer]
  )
  return {
    ...buildDikes(times)(addToken({ G, ctx }, item)).G,
    action: null,
  }
}
