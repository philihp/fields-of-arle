import { compose } from 'redux'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { remove, identity } from '../common/index'
import destinations from '../destinations/index'
import { isDestination, isInventoryItemButNotPeat } from '../common/tokens'

// TODO not really sure where I want this info to live... currently duplicated for destinations
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
  summerWear: 3,
  woolen: 2,
  winterWear: 2,
  leather: 3,
  leatherWear: 3,
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

const removeFromPlayerDestinations = token => player => ({
  ...player,
  destinations: remove(token)(player.destinations),
})

const removeFromInventory = ({ token }) => {
  if (isInventoryItemButNotPeat(token)) {
    return applyToCurrentPlayer(removeFromPlayerInventory(token))
  } else if (isDestination(token)) {
    return applyToCurrentPlayer(removeFromPlayerDestinations(token))
  }
  return identity
}

const burnPeatForClay = ({ token }) => {
  if (token === 'clay') {
    return applyToCurrentPlayer(removeFromPlayerInventory('peat'))
  }
  return identity
}

const moveTokenToVehicle = arg => applyToCurrentPlayer(addToBarnContents(arg))

const sellAtDestination = arg => state => {
  const destinationProcessor = destinations[arg.token]
  if (destinationProcessor === undefined) return state
  return destinationProcessor(arg.conversionInputs)(state)
}

export default (G, ctx, ...args) => {
  if (![null, 'load'].includes(G.action)) return G
  const [arg] = args
  if (arg === undefined) {
    return actionOption('load')({ G, ctx, ...args }).G
  } else if (arg === 'cancel') {
    return actionOption(null)({ G, ctx, ...args }).G
  } else {
    return compose(
      sellAtDestination(arg),
      moveTokenToVehicle(arg),
      removeFromInventory(arg),
      burnPeatForClay(arg),
      actionOption(null)
    )({ G, ctx, ...args }).G
  }
}
