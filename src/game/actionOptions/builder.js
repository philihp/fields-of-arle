import { compose } from 'redux'
import { spendInventory, spendGoods } from '../../game/common'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { buildingRequiresNoParams } from '../costs/index'
import onBuild from '../building/onBuild'

// TODO specialized to farmers Inn => code must be moved!
const buildingHasImmediateAction = building => building === 'farmersInn'

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

const placeBuildingPlayer = ({ building, row, col }) => player => ({
  ...player,
  tokens: [...player.tokens, ...player.land[row][col].contents],
  land: [
    ...player.land.slice(0, row),
    [
      ...player.land[row].slice(0, col),
      {
        ...player.land[row][col],
        type: building,
        contents: [],
      },
      ...player.land[row].slice(col + 1),
    ],
    ...player.land.slice(row + 1),
  ],
})

// TODO specialized to farmers Inn => code must be moved!
const applyImmediateAction = locs => player => {
  const land = JSON.parse(JSON.stringify(player.land))
  locs.forEach(([row, col]) => {
    land[row][col] = {
      ...land[row][col],
      type: 'forest',
    }
  })
  return {
    ...player,
    land,
  }
}

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
    (selected.hasOwnProperty('cost') ||
      buildingRequiresNoParams(selected.building)) &&
    (selected.hasOwnProperty('immediate_action') ||
      !buildingHasImmediateAction(selected.building))
  ) {
    return compose(
      clearSelected,

      // would LIKE to do this, but some buildings affect tool levels
      // applyToCurrentPlayer(onBuild(selected.building)),
      // which currently exist in general board state, not player state,
      // so instead we have to do this
      onBuild(selected.building),

      applyToCurrentPlayer(placeBuildingPlayer(selected)),
      removeBuilding(selected.building),
      // TODO expendInventory(selected.cost),
      // TODO expendGoods({})

      applyToCurrentPlayer(applyImmediateAction(selected.immediate_action)),

      // this should be done before onBuild so the building can potentially overwrite it
      actionOption(null)
    )({ G, ctx, selected, ...args }).G
  } else {
    return {
      ...G,
      selected,
    }
  }
}
