// getVehicle({ G, ctx, ...args }, 'peatBoat')
import { getVehicle, payForVehicle } from '../common/player'
import { findSeaLevel } from '../common/land'

const purchasePlow = (accum, withAnimal) => {
  if (!withAnimal) return accum
  const gottenVehicle = getVehicle(accum, 'plow')
  const paidForVehicle = payForVehicle(gottenVehicle, 'plow', withAnimal)
  return paidForVehicle
}

const placePlowedFields = (accum, field) => {
  const { crop, row, col } = field
  const { G, ctx } = accum
  const oldLand = G.players[ctx.currentPlayer].land[row][col]
  const seaLevel = findSeaLevel(G.players[ctx.currentPlayer].dikes)
  if (oldLand.type !== 'empty' && row < seaLevel) {
    return accum
  }
  const newTokens = [
    ...G.players[ctx.currentPlayer].tokens,
    ...oldLand.contents,
  ]
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...G.players[ctx.currentPlayer],
          tokens: newTokens,
          land: [
            ...G.players[ctx.currentPlayer].land.slice(0, row),
            [
              ...G.players[ctx.currentPlayer].land[row].slice(0, col),
              {
                type: crop,
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
  }
}

export default ({ G, ctx, args }) => {
  const [{ buyPlow, plowFields }] = args
  const G2 = purchasePlow({ G, ctx }, buyPlow).G
  const G3 = plowFields.reduce(placePlowedFields, { G: G2, ctx }).G
  return {
    ...G3,
    action: null,
  }
}
