export default (G, ctx, ...args) => {
  if (![null, 'load'].includes(G.action)) return G
  else {
    const [arg] = args
    if (arg === 'cancel') {
      return {
        ...G,
        action: null,
      }
    }
    return {
      ...G,
      action: 'load',
    }
  }
}
