export const tokenSizes = {
  norden: 2,
  hage: 1,
  beemoor: 1,
  dornum: 1,
  emden: 3,
  aurich: 2,
  esens: 2,
  leer: 3,
  bremen: 4,

  wood: 1,
  timber: 1,

  clay: 1,
  brick: 1,

  linen: 3,
  summerWare: 3,

  woolen: 2,
  winterWare: 2,

  leather: 3,
  leatherWare: 3,
}

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
