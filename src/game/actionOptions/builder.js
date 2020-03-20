import { compose } from 'redux'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { buildingRequiresNoParams } from '../costs/index'
import onBuild from '../building/onBuild'

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
      buildingRequiresNoParams(selected.building))
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
