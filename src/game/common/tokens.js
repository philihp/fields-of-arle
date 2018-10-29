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

const size = {
  peat: 1, // sorta
  wood: 1,
  timber: 1,
  clay: 1,
  brick: 1,
  linen: 2,
  summerWear: 2,
  woolen: 3,
  winterWear: 3,
  leather: 3,
  leatherWear: 3,
}

export const tokenSize = token => size[token]

export const flip = token =>
  flippedToken[token] !== undefined ? flippedToken[token] : token

export default { flip }
