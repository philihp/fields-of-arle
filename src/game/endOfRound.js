import { compose } from 'redux'
import {
  addGoodsToPlayer,
  countAnimals,
  curriedAddGoodsToPlayer,
  inventoryAdd,
  inventoryAddToPlayer,
} from './common/player'
import { destinationSize } from './destinations/index'
import { spendInventory, remove } from './common/index'
import { playerBarnVehicles } from './common/barn'
import { flip, isInventoryItemButNotPeat, isDestination } from './common/tokens'

// 1: One
const emptyVehicleIfExists = vehicle => {
  if (vehicle === null) return null
  return {
    ...vehicle,
    contents: vehicle.contents.fill(null),
  }
}

const emptyBarn = player => ({
  ...player,
  barn: Object.keys(player.barn).reduce(
    (accum, key) => ({
      ...accum,
      [key]: emptyVehicleIfExists(player.barn[key]),
    }),
    {}
  ),
})

const accrueTravelExperience = destinations => player => ({
  ...player,
  travelExperience: destinations.reduce(
    (sum, destination) => sum + destinationSize(destination),
    player.travelExperience
  ),
})

const emptyVehicles = player => {
  //  if (!player) return null
  const tokens = playerBarnVehicles(player)
    .filter(v => v !== null)
    .map(v => v.contents)
    .flat()
    .filter(i => i !== null)
    .map(t => flip(t))
  return compose(
    emptyBarn,
    accrueTravelExperience(tokens.filter(isDestination)),
    inventoryAddToPlayer(...tokens.filter(isInventoryItemButNotPeat))
  )(player)
}

// 2: Two

export const milking = player => {
  // 1/2/3 Food for 2/5/8 Sheep, 1/2/3 Food for 1/3/5 Cattle
  const { sheep, cattle } = countAnimals(player)
  const addedFood = [
    // for each of these that's true, add 1 food
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
  // TODO
  if (!player) return null
  return player
}

// 3: Three
const curriedAddInventoryToPlayer = (type, amount) => player => ({
  ...player,
  inventory: [...player.inventory, ...new Array(amount).fill(type)],
})

const harvest = player => {
  const types = player.land.flat().map(cell => cell.type)
  return compose(
    curriedAddGoodsToPlayer(
      'grain',
      types.filter(type => type === 'grain').length
    ),
    curriedAddGoodsToPlayer(
      'flax',
      types.filter(type => type === 'flax').length
    ),
    curriedAddInventoryToPlayer(
      'wood',
      types.filter(type => type === 'forest').length
    )
  )(player)
}
const sheering = player => {
  // TODO
  if (!player) return null
  return player
}

// 4: Four

const sustenanceFood = player => {
  if (player.goods.food >= 3) {
    return addGoodsToPlayer({ player, good: 'food', amount: -3 })
  } else if (player.goods.food + player.goods.grain >= 3)
    return {
      ...player,
      goods: {
        ...player.goods,
        food: 0,
        grain: 3 - player.goods.food,
      },
    }
  else
    return {
      ...player,
      goods: {
        ...player.goods,
        food: 0,
        grain: 0,
        // TODO: this could trigger asking the player which animals they want to eat.
        // If the player ends up having to eat an animal, they need to do the "slaughter"
        // action. Most of the time this will never be necesary, so it can be punted.
        foodDeficit: 3 - player.goods.food - player.goods.grain,
      },
    }
}

const consumeInventory = (state, consumed) => {
  if (state.inventory.includes(consumed)) {
    return {
      inventory: remove(consumed)(state.inventory),
      demand: state.demand,
    }
  } else {
    return {
      inventory: state.inventory,
      demand: [...state.demand, consumed],
    }
  }
}

const sustenanceFuel = player => {
  const state0 = {
    inventory: player.inventory,
    demand: new Array(2).fill('peat'),
  }

  // for each element in demand, consume it in inventory (or stick it back in demand)
  const state1 = state0.demand.reduce(consumeInventory, {
    inventory: state0.inventory,
    demand: [],
  })

  // for each element in demand, turn it into a wood and do the same
  const state2 = state1.demand.fill('wood').reduce(consumeInventory, {
    inventory: state1.inventory,
    demand: [],
  })

  // for each element in demand, turn it into a timber and do the same again
  const state3 = state2.demand.fill('timber').reduce(consumeInventory, {
    inventory: state2.inventory,
    demand: [],
  })

  // finally, replace inventory with inventory, and increase supply bottlenecks by size of demand
  return {
    ...player,
    inventory: state3.inventory,
    supplyBottlenecks: player.supplyBottlenecks + state3.demand.length,
  }
}

const onNovemberBeginForPlayer = compose(
  // these are evaluated right to left, order is important for sustenance
  sustenanceFood,
  sustenanceFuel,
  harvest,
  milking,
  emptyVehicles
)

const onMayBeginForPlayer = compose(
  // these are evaluated right to left, order is important for sustenance
  sustenanceFood,
  sheering,
  babyAnimals,
  emptyVehicles
)

const forAllPlayersDo = f => G => ({
  ...G,
  players: {
    0: f(G.players['0']),
    1: f(G.players['1']),
  },
})

export const onNovemberBegin = forAllPlayersDo(onNovemberBeginForPlayer)

export const onMayBegin = forAllPlayersDo(onMayBeginForPlayer)

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
