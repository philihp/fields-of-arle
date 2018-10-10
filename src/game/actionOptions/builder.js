import { compose } from 'redux'
import { spendInventory, spendGoods } from '../../game/common'

// these are the steps that must be composed
// and executed in reverse order on { G, ctx, ...args }

// setActionNull
// clearSelected
// takeBenefitFromBuilding
// removeBuilding({building})
// placeBuilding({building, row, col})
// spendInventory(lookupInventoryCost(building, cost)
// spendGoods(lookupGoodsCost(building, cost))

const all = ({ G, ctx, selected, ...args }) => {
  const player = G.players[ctx.currentPlayer]
  const { row, col, building, cost } = selected
  return {
    G: {
      ...G,
      action: null,
      selected: undefined,
      buildings: G.buildings.map(b => (b === building ? null : b)),
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...player,
          inventory: spendInventory(player.inventory, cost),
          goods: spendGoods(player.goods, cost),
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
  }
}

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
    return compose(all)({ G, ctx, selected, ...args }).G
  } else {
    return {
      ...G,
      selected,
    }
  }
}
