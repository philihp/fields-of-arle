import destinations from '../destinations/index'

export const isDestination = token => Object.keys(destinations).includes(token)

export const isInventoryItemButNotPeat = token =>
  [
    'wood',
    'timber',
    'clay',
    'brick',
    'linen',
    'summerWare',
    'woolen',
    'winterWare',
    'leather',
    'leatherWare',
  ].includes(token)

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
