import { spendInventory, spendGoods } from '../../game/common'

export default ({ G, ctx: { currentPlayer }, args }) => {
  const [options] = args
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
    const player = G.players[currentPlayer]
    const { row, col, building, cost } = selected
    return {
      ...G,
      action: null,
      selected: undefined,
      buildings: G.buildings.map(b => (b === building ? null : b)),
      players: {
        ...G.players,
        [currentPlayer]: {
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
    }
  } else {
    return {
      ...G,
      selected,
    }
  }
}
