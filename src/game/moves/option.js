import actionOptions from '../actionOptions'

// TODO: workshop option...
// needs to turn G.workshop = null

export default (G, ctx, ...args) => {
  if (Object.keys(actionOptions).includes(G.action)) {
    return actionOptions[G.action]({ G, ctx, args })
  } else {
    return G
  }
}
