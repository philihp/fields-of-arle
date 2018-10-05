import { compose } from 'redux'
import { addGoodsToPlayer, countAnimals } from './common/player'

// 1: One
const emptyVehicles = ({ G, ctx }) => {
  console.log('emptyVehicles')
  return { G, ctx }
}

// 2: Two

const milkingPlayer = player => {
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
const milking = ({ G, ctx }) => ({
  G: {
    ...G,
    players: {
      0: milkingPlayer(G.players['0']),
      1: milkingPlayer(G.players['1']),
    },
  },
  ctx,
})

const babyAnimals = ({ G, ctx }) => {
  console.log('babyAnimals')
  return { G, ctx }
}

// 3: Three
const harvest = ({ G, ctx }) => {
  console.log('harvest')
  return { G, ctx }
}
const sheering = ({ G, ctx }) => {
  console.log('sheering')
  return { G, ctx }
}

// 4: Four
const sustenanceFood = ({ G, ctx }) => {
  console.log('sustenanceFood')
  return { G, ctx }
}
const sustenanceFuel = ({ G, ctx }) => {
  console.log('sustenanceFuel')
  return { G, ctx }
}

export const onNovemberBegin = (G, ctx) =>
  compose(
    // these are evaluated right to left
    sustenanceFood,
    sustenanceFuel,
    harvest,
    milking,
    emptyVehicles
  )({ G, ctx }).G

export const onMayBegin = (G, ctx) =>
  compose(
    // these are evaluated right to left
    sustenanceFood,
    sheering,
    babyAnimals,
    emptyVehicles
  )({ G, ctx }).G

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
