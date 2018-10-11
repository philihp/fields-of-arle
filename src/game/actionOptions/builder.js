import { compose } from 'redux'
import { spendInventory, spendGoods } from '../../game/common'
import { actionOption } from '../common/player'

const clearSelected = ({ G, ...args }) => ({
  G: {
    ...G,
    selected: undefined,
  },
  ...args,
})

const removeBuilding = building => ({ G, ...args }) => ({
  G: {
    ...G,
    buildings: G.buildings.map(b => (b === building ? null : b)),
  },
  ...args,
})

const placeBuilding = ({ building, row, col }) => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        land: [
          ...player.land.slice(0, row),
          [
            ...player.land[row].slice(0, col),
            {
              ...player.land[row][col],
              type: building,
            },
            ...player.land[row].slice(col + 1),
          ],
          ...player.land.slice(row + 1),
        ],
      },
    },
  },
  ctx,
  ...args,
})

const expendInventory = ({ cost }) => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        inventory: spendInventory(G.players[ctx.currentPlayer].inventory, cost),
      },
    },
  },
  ctx,
  ...args,
})

const expendGoods = ({ cost }) => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        goods: spendGoods(G.players[ctx.currentPlayer].goods, cost),
      },
    },
  },
  ctx,
  ...args,
})

export default ({ G, ctx, ...args }) => {
  const {
    args: [options],
  } = args
  const selected = {
    ...G.selected,
    ...options,
  }
  if (
    selected.hasOwnProperty('building') &&
    selected.hasOwnProperty('col') &&
    selected.hasOwnProperty('row') &&
    selected.hasOwnProperty('cost')
  ) {
    return compose(
      actionOption(null),
      clearSelected,
      removeBuilding(building),
      placeBuilding(selected),
      expendInventory(cost),
      expendGoods(cost)
    )({ G, ctx, selected, ...args }).G
  } else {
    return {
      ...G,
      selected,
    }
  }
}
