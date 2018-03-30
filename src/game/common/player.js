import { flatten, spend, Animals } from './index'
import { openBarnSpace, VehicleSource, EquipmentCosts } from './barn'
import { removeFirstAnimal } from './animals'

/*
Uncomposed utility functions, which you probably want to call with just
the single param {G, ctx}.
*/

export const setAction = ({ G, ctx, ...args }) => {
  return {
    G: {
      ...G,
      action: args[0],
    },
    ctx,
  }
}

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

export const addInventory = ({ G, ctx, ...args }, newInventoryList) => ({
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

export const bumpTool = ({ G, ctx, ...args }, tool) => ({
  G: {
    ...G,
    toolSpaces: {
      ...G.toolSpaces,
      [tool]: {
        ...G.toolSpaces[tool],
        [ctx.currentPlayer]: G.toolSpaces[tool][ctx.currentPlayer] + 1,
      },
    },
  },
  ctx,
  ...args,
})

export const addGoods = ({ G, ctx, ...args }, good, amount) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        goods: {
          ...G.players[ctx.currentPlayer].goods,
          [good]: G.players[ctx.currentPlayer].goods[good] + amount,
        },
      },
    },
  },
  ctx,
  ...args,
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
            [openBarnSpace(barn, type)]: type,
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

export const payForVehicle = ({ G, ctx, ...args }, type) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        // this part expends the animals
        ...EquipmentCosts[type]
          .filter(a => Animals.includes(a))
          .reduce(removeFirstAnimal, G.players[ctx.currentPlayer]),
        // this part expends the building materials
        inventory: spend(
          G.players[ctx.currentPlayer].inventory,
          EquipmentCosts[type]
        ),
      },
    },
  },
  ctx,
  ...args,
})

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

export const countAnimals = player => {
  return [...player.land, ...player.dikes]
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
}
