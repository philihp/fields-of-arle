import { ToolIncrements } from '../constants'
import { actionOption } from './player'

// These functions should all take in state ({ G, ctx, ...args})

export const toolBump = tool => ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    toolSpaces: {
      ...G.toolSpaces,
      [tool]: [
        ...G.toolSpaces[tool].slice(0, Math.trunc(ctx.currentPlayer)),
        Math.min(
          G.toolSpaces[tool][Math.trunc(ctx.currentPlayer)] + 1,
          ToolIncrements[tool].length - 1
        ),
        ...G.toolSpaces[tool].slice(Math.trunc(ctx.currentPlayer) + 1),
      ],
    },
  },
  ctx,
  ...args,
})

export const cutPeatTimes = times => ({ G, ctx, ...args }) =>
  actionOption('peatCutter')({
    G: {
      ...G,
      times,
    },
    ctx,
    ...args,
  })
