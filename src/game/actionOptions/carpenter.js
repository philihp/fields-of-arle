import { spendInventory } from '../../game/common'

const newInventory = (player, building) => {
  switch (building) {
    case 'stall':
      return {
        inventory: spendInventory(player.inventory, ['clay', 'clay']),
        goods: {
          ...player.goods,
          grain: player.goods.grain - 1,
        },
      }
    case 'stable':
      return {
        inventory: spendInventory(player.inventory, ['brick', 'brick']),
      }
    default:
      return {}
  }
}

const newSupplies = (supplies, replacedBuilding, placedBuilding) => ({
  ...supplies,
  stallDepot:
    supplies.stallDepot +
    (replacedBuilding === 'stall' ? 1 : 0) +
    (placedBuilding === 'stall' ? -1 : 0),
  stableDoubleStall:
    supplies.stableDoubleStall + (placedBuilding === 'stable' ? -1 : 0),
})

export default ({ G, ctx: { currentPlayer }, args }) => {
  const [{ row, col, action }] = args
  if (action === 'build') {
    return {
      ...G,
      action: 'builder',
    }
  } else {
    const player = G.players[currentPlayer]
    const oldType = G.players[currentPlayer].land[row][col].type
    const newType = oldType === 'empty' ? 'stall' : 'stable'
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
      supplies: newSupplies(G.supplies, oldType, newType),
    }
  }
}
