export default (G, ctx, ...args) => {
  if (![null, 'load'].includes(G.action)) return G
  else {
    const [arg] = args
    return {
      ...G,
      action: 'load',
      loading: {
        ...G.loading,
        ...arg,
      },
    }
  }
}
