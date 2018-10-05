import { compose } from 'redux'
import { addGoodsToPlayer, countAnimals } from './common/player'

// 1: One
const emptyVehicles = player => {
  console.log('emptyVehicles')
  return player
}

// 2: Two

const milking = player => {
  // 1/2/3 Food for 2/5/8 Sheep, 1/2/3 Food for 1/3/5 Cattle
  const { sheep, cattle } = countAnimals(player)
  const addedFood = [
    // for each of these that's true, add 1 food
    // TODO: make a test for this with 30 sheep, to
    //       ensure it isn't refactored to add one an divide by 3
    //       the rules are really explicit about a max 6.
    sheep >= 2,
    sheep >= 5,
    sheep >= 8,
    cattle >= 1,
    cattle >= 3,
    cattle >= 5,
  ].reduce((total, meetsThreshold) => total + (meetsThreshold ? 1 : 0), 0)
  return addGoodsToPlayer({ player, good: 'food', amount: addedFood })
}

const babyAnimals = player => {
  console.log('babyAnimals')
  return player
}

// 3: Three
const harvest = player => {
  console.log('harvest')
  return player
}
const sheering = player => {
  console.log('sheering')
  return player
}

// 4: Four
const sustenanceFood = player => {
  console.log('sustenanceFood')
  return player
}
const sustenanceFuel = player => {
  console.log('sustenanceFuel')
  return player
}

const onNovemberBeginForPlayer = player =>
  compose(
    // these are evaluated right to left
    sustenanceFood,
    sustenanceFuel,
    harvest,
    milking,
    emptyVehicles
  )(player)

const onMayBeginForPlayer = player =>
  compose(
    // these are evaluated right to left
    sustenanceFood,
    sheering,
    babyAnimals,
    emptyVehicles
  )(player)

const forAllPlayersDo = (G, f) => ({
  ...G,
  players: {
    0: f(G.players['0']),
    1: f(G.players['1']),
  },
})

export const onNovemberBegin = G => forAllPlayersDo(G, onNovemberBeginForPlayer)

export const onMayBegin = G => forAllPlayersDo(G, onMayBeginForPlayer)

const lighthouseReset = lighthouse => ({
  used: false,
  // if lighthouse was not used, swap the owner
  owner: lighthouse.used ? lighthouse.owner : -(lighthouse.owner - 1),
})

export const onRoundEnd = (G, ctx) => ({
  ...G,
  halfYear: G.halfYear + 1,
  lighthouse: lighthouseReset(G.lighthouse),
})
