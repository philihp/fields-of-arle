import { compose } from 'redux'
import { inventoryAdd, actionOption } from '../common/player'

const place = type => ({ G, ctx, ...args }) => {
  const {
    args: [{ row, col }],
  } = args
  const oldLand = G.players[ctx.currentPlayer].land[row][col]
  if (oldLand.type !== 'empty') return { G, ctx, ...args }
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...G.players[ctx.currentPlayer],
          tokens: [...G.players[ctx.currentPlayer].tokens, ...oldLand.contents],
          land: [
            ...G.players[ctx.currentPlayer].land.slice(0, row),
            [
              ...G.players[ctx.currentPlayer].land[row].slice(0, col),
              {
                type,
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

export default ({ G, ctx, ...args }) =>
  compose(
    actionOption(null),
    place('forest')
  )({ G, ctx, ...args }).G
