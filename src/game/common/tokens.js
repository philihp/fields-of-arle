const flippedToken = {
  clay: 'brick',
  wood: 'timber',
  linen: 'summerWare',
  woolen: 'winterWare',
  leather: 'leatherWare',
}

export const flip = token =>
  flippedToken[token] !== undefined ? flippedToken[token] : token

export default { flip }
