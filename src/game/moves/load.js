import { compose } from 'redux'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { remove } from '../common/index'

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

export const destinationInputs = {
  hage: [null],
  beemoor: [null],
  dornum: [null],
  norden: [null, null, null],
  aurich: [null, null, null],
  esens: [null, null, null],
  emden: [null, null, null, null],
  leer: [null, null, null, null],
  bremen: [null, null, null, null, null],
}

const addToBarnContents = ({ token, barnSpace, vehicleOffset }) => player => ({
  ...player,
  barn: {
    ...player.barn,
    [barnSpace]: {
      ...player.barn[barnSpace],
      contents: [
        ...player.barn[barnSpace].contents.slice(0, vehicleOffset),
        token,
        ...player.barn[barnSpace].contents.slice(vehicleOffset + 1),
      ],
    },
  },
})

const removeFromPlayerInventory = token => player => ({
  ...player,
  inventory: remove(token)(player.inventory),
})

const removeFromInventory = ({ token }) => {
  if (
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
  ) {
    return applyToCurrentPlayer(removeFromPlayerInventory(token))
  }
  return state => state
}

const burnPeatForClay = ({ token }) => {
  if (token === 'clay') {
    return applyToCurrentPlayer(removeFromPlayerInventory('peat'))
  }
  return state => state
}

const moveTokenToVehicle = arg => applyToCurrentPlayer(addToBarnContents(arg))

export default (G, ctx, ...args) => {
  if (![null, 'load'].includes(G.action)) return G
  const [arg] = args
  if (arg === undefined) return actionOption('load')({ G, ctx, ...args }).G
  else if (arg === 'cancel') return actionOption(null)({ G, ctx, ...args }).G
  else {
    return compose(
      moveTokenToVehicle(arg),
      removeFromInventory(arg),
      burnPeatForClay(arg),
      actionOption(null)
    )({ G, ctx, ...args }).G
  }
}
