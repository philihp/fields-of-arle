import actionOptions from '../actionOptions'
import { autoArrange } from './arrange'

export default (G, ctx, ...args) => {
  if (Object.keys(actionOptions).includes(G.action)) {
    return autoArrange(actionOptions[G.action]({ G, ctx, args }))
  } else {
    // console.warn(`Action ${G.action} has no options`)
    return G
  }
}
