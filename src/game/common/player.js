import { remove, flatten, spendInventory, Animals, spendGoods } from './index'
import {
  openBarnSpace,
  VehicleSlots,
  EquipmentCosts,
  playerBarnVehicles,
} from './barn'
import { VehicleSource } from './vehicle'
import { removeFirstAnimalReducer } from './animals'
import { GoodsLimit } from '../constants'

/*
Uncomposed utility functions, which you probably want to call with just
the single param {G, ctx}.
*/

export const actionOption = action => ({ G, ...args }) => ({
  G: {
    ...G,
    action,
  },
  ...args,
})

export const setAction = ({ G, ctx, ...args }) =>
  actionOption(args[0])({ G, ctx, ...args })

export const addToken = ({ G, ctx, ...args }, newToken) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        tokens: [...G.players[ctx.currentPlayer].tokens, newToken],
      },
    },
  },
  ctx,
  ...args,
})

export const inventoryAddToPlayer = (...newInventoryList) => player => ({
  ...player,
  inventory: [...player.inventory, ...newInventoryList],
})

export const inventorySpendFromPlayer = (...tokens) => player => ({
  ...player,
  inventory: spendInventory(player.inventory, tokens),
})

// TODO: create tests, and then rewrite using applyToCurrentPlayer and inventoryAddToPlayer
export const inventoryAdd = (...newInventoryList) => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        inventory: [
          ...G.players[ctx.currentPlayer].inventory,
          ...newInventoryList,
        ],
      },
    },
  },
  ctx,
  ...args,
})

// deprecated, better order is list first. use inventoryAdd
export const addInventory = ({ G, ctx, ...args }, newInventoryList) =>
  inventoryAdd(...newInventoryList)({ G, ctx, ...args })

// TODO: refactor to curried function
export const addGoodsToPlayer = ({ player, good, amount }) => ({
  ...player,
  goods: {
    ...player.goods,
    [good]:
      player.goods[good] + amount > GoodsLimit[good]
        ? GoodsLimit[good]
        : player.goods[good] + amount,
  },
})

export const curriedAddGoodsToPlayer = (good, amount) => player =>
  addGoodsToPlayer({ player, good, amount })

export const addGoods = ({ G, ctx, ...args }, good, amount) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: addGoodsToPlayer({
        player: G.players[ctx.currentPlayer],
        good,
        amount,
      }),
    },
  },
  ctx,
  ...args,
})

export const spendGoodsFromPlayer = cost => player => ({
  ...player,
  goods: spendGoods(player.goods, cost),
})

export const getVehicle = ({ G, ctx, ...args }, type) => {
  const barn = G.players[ctx.currentPlayer].barn
  const fromStack = VehicleSource[type]
  if (G.supplies[fromStack] <= 0 || !openBarnSpace(barn, type))
    return { G, ctx, ...args }
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...G.players[ctx.currentPlayer],
          barn: {
            ...barn,
            [openBarnSpace(barn, type)]: { type, contents: VehicleSlots[type] },
          },
        },
      },
      supplies: {
        ...G.supplies,
        [fromStack]: G.supplies[fromStack] - 1,
      },
    },
    ctx,
    ...args,
  }
}

export const curriedGetVehicle = type => state => getVehicle(state, type)

export const payForVehicle = ({ G, ctx, ...args }, type, withAnimal) => {
  const cost = withAnimal
    ? EquipmentCosts[type][withAnimal]
    : EquipmentCosts[type]
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          // this part expends the animals
          ...cost
            .filter(a => Animals.includes(a))
            .reduce(removeFirstAnimalReducer, G.players[ctx.currentPlayer]),
          // this part expends the building materials
          inventory: spendInventory(
            G.players[ctx.currentPlayer].inventory,
            cost
          ),
        },
      },
    },
    ctx,
    ...args,
  }
}

export const arrangeItem = ({ G, ctx, ...args }, { src, dst }) => {
  const player = G.players[ctx.currentPlayer]
  const removedItem = player[src.type][src.row][src.col].contents[src.i]
  const player2 = {
    ...player,
    [src.type]: [
      ...player[src.type].slice(0, src.row),
      [
        ...player[src.type][src.row].slice(0, src.col),
        {
          ...player[src.type][src.row][src.col],
          contents: [
            ...player[src.type][src.row][src.col].contents.slice(0, src.i),
            ...player[src.type][src.row][src.col].contents.slice(src.i + 1),
          ],
        },
        ...player[src.type][src.row].slice(src.col + 1),
      ],
      ...player[src.type].slice(src.row + 1),
    ],
  }
  const player3 = {
    ...player2,
    [dst.type]: [
      ...player2[dst.type].slice(0, dst.row),
      [
        ...player2[dst.type][dst.row].slice(0, dst.col),
        {
          ...player2[dst.type][dst.row][dst.col],
          contents: [
            ...player2[dst.type][dst.row][dst.col].contents,
            removedItem,
          ],
        },
        ...player2[dst.type][dst.row].slice(dst.col + 1),
      ],
      ...player2[dst.type].slice(dst.row + 1),
    ],
  }

  return {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: player3,
    },
  }
}

export const countAnimals = player =>
  [...player.land, ...player.dikes]
    .reduce(flatten, [])
    .map(cell => cell.contents)
    .reduce(flatten, [])
    .reduce(
      (accum, item) => {
        switch (item) {
          case 'cattle':
            return {
              ...accum,
              cattle: accum.cattle + 1,
            }
          case 'sheep':
            return {
              ...accum,
              sheep: accum.sheep + 1,
            }
          case 'horse':
            return {
              ...accum,
              horses: accum.horses + 1,
            }
          default:
            return accum
        }
      },
      {
        sheep: 0,
        cattle: 0,
        horses: 0,
      }
    )

export const applyToCurrentPlayer = modifier => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: modifier(G.players[ctx.currentPlayer]),
    },
  },
  ctx,
  ...args,
})

export const landOfType = (...types) => player =>
  player.land
    .flatMap((row, y) => row.map((cell, x) => [cell.type, y, x]))
    .filter(([type, y, x]) => types.includes(type))

export const sellableAtDestination = player => [
  // all the flax and grain fields
  ...landOfType('grain', 'flax')(player).map(
    ([type, y, x]) => `${type}-${x}-${y}`
  ),
  // add one or two of the goods... don't add more because nothing sells more than 2
  ...(player.goods.flax >= 1 ? ['flax'] : []),
  ...(player.goods.hide >= 1 ? ['hide'] : []),
  ...(player.goods.grain >= 1 ? ['grain'] : []),
  ...(player.goods.grain >= 2 ? ['grain'] : []),
  // boardwalk moor
  ...[player.land[4][1]]
    .map(cell => cell.type)
    .filter(type => type === 'boardwalk'),
  // moor toiles
  ...player.land[5]
    .map(cell => cell.type)
    .map((item, index) => (item === 'moorNorth' ? [`moor-${index}`] : []))
    .flat(),
  // inventory
  ...player.inventory,
  // things on the land tiles, minus uncut peat
  ...player.land
    .flat()
    .map(cell => cell.contents)
    .flat()
    .filter(item => item !== 'peat'),
  // animals on dikes
  ...player.dikes
    .flat()
    .map(cell => cell.contents)
    .flat(),
  // vehicles
  ...playerBarnVehicles(player)
    .filter(v => v !== null)
    .map(vehicle => vehicle.type),
]

// returns something like...
// [
//   {type: "droshky", contents: [null,null,null], space: "large1",
//   {type: "carriage", contents: [null,null,null], space: "large2",
//   ...
// ]
export const usableVehicles = player =>
  Object.entries(player.barn)
    // remove any spaces with nothing in the parked spot
    .filter(([space, parked]) => parked !== null)
    // map the key/name of the space into the vehicle itself
    .map(([space, val]) => ({ ...val, space }))
