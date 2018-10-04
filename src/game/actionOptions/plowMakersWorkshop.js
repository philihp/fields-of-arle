import { compose } from 'redux'
import { findSeaLevel } from '../common/land'
import { passIfNoOtherWorkshops } from './workshop'

const placePlowedFields = (accum, field) => {
  const { crop, row, col } = field
  const { G, ctx, ...args } = accum
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
    ...args,
  }
}

const placeField = ({ G, ctx, ...args }) => {
  const { args: fields } = args
  return fields.reduce(placePlowedFields, { G, ctx, ...args })
}

const clearAction = ({ G, ctx, ...args }) => ({
  G: { ...G, action: null },
  ctx,
  ...args,
})

export default ({ G, ctx, ...args }) =>
  compose(
    passIfNoOtherWorkshops,
    placeField,
    clearAction
  )({ G, ctx, ...args }).G
