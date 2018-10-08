export default (G, ctx, ...args) => {
  if (![null, 'load'].includes(G.action)) return G
  else if (args.length === 0) {
    return {
      ...G,
      action: G.action === 'load' ? null : 'load',
      loading: undefined,
    }
  } else {
    const [arg] = args
    console.log(arg)
    return {
      ...G,
      loading: {
        ...G.loading,
        ...arg,
      },
    }
  }
}
