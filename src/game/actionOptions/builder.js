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
        tokens: [
          ...G.players[ctx.currentPlayer].tokens,
          ...G.players[ctx.currentPlayer].land[row][col].contents,
        ],
        land: [
          ...G.players[ctx.currentPlayer].land.slice(0, row),
          [
            ...G.players[ctx.currentPlayer].land[row].slice(0, col),
            {
              ...G.players[ctx.currentPlayer].land[row][col],
              type: building,
              contents: [],
            },
            ...G.players[ctx.currentPlayer].land[row].slice(col + 1),
          ],
          ...G.players[ctx.currentPlayer].land.slice(row + 1),
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
      removeBuilding(selected.building),
      placeBuilding(selected)
      // TODO expendInventory(selected.cost),
      // TODO expendGoods({})
    )({ G, ctx, selected, ...args }).G
  } else {
    return {
      ...G,
      selected,
    }
  }
}
