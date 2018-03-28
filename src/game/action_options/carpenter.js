import { spend } from '../../game/common'

const newInventory = (player, type) => {
  switch (type) {
    case 'stall':
      return {
        inventory: spend(player.inventory, ['clay', 'clay']),
        goods: {
          ...player.goods,
          grain: player.goods.grain - 1,
        },
      }
    case 'stable':
      return {
        inventory: spend(player.inventory, ['brick', 'brick']),
      }
    default:
      return {}
  }
}

export default ({ G, ctx: { currentPlayer }, args }) => {
  const [{ row, col }] = args
  const player = G.players[currentPlayer]

  const newType =
    G.players[currentPlayer].land[row][col].type === 'empty'
      ? 'stall'
      : 'stable'

  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...player,
        ...newInventory(player, newType),
        land: [
          ...player.land.slice(0, row),
          [
            ...player.land[row].slice(0, col),
            {
              ...player.land[row][col],
              type: newType,
            },
            ...player.land[row].slice(col + 1),
          ],
          ...player.land.slice(row + 1),
        ],
      },
    },
  }
}
