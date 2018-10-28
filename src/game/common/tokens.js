import destinations from '../destinations/index'

export const isDestination = token => Object.keys(destinations).includes(token)

export const isInventoryItemButNotPeat = token =>
  [
    'wood',
    'timber',
    'clay',
    'brick',
    'linen',
    'summerWear',
    'woolen',
    'winterWear',
    'leather',
    'leatherWear',
  ].includes(token)

const flippedToken = {
  clay: 'brick',
  wood: 'timber',
  linen: 'summerWear',
  woolen: 'winterWear',
  leather: 'leatherWear',
}

export const flip = token =>
  flippedToken[token] !== undefined ? flippedToken[token] : token

export default { flip }
