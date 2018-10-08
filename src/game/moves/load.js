export default (G, ctx, args) => {
  if (![null, 'load'].includes(G.action)) return G
  if (args === undefined) {
    // if nothing, toggle showing the option pane
    return {
      ...G,
      action: G.action === 'load' ? null : 'load',
    }
  }
  return G
}
