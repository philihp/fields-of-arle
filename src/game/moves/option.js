import actionOptions from '../actionOptions'
import { autoArrange } from './arrange'

export default (G, ctx, ...args) => {
  if (Object.keys(actionOptions).includes(G.action)) {
    const action = actionOptions[G.action]
    const resultFromAction = action({ G, ctx, args })
    const resultFromArrange = autoArrange(resultFromAction)
    return resultFromArrange
  } else {
    // console.warn(`Action ${G.action} has no options`)
    return G
  }
}
