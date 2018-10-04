import { compose } from 'redux'

// 1: One
const emptyVehicles = ({ G, ctx }) => {
  console.log('emptyVehicles')
  return { G, ctx }
}

// 2: Two
const milking = ({ G, ctx }) => {
  console.log('milking')
  return { G, ctx }
}
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
