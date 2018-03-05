export const addToken = ({ G, ctx }, newToken) => {
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...G.players[ctx.currentPlayer],
          tokens: [...G.players[ctx.currentPlayer].tokens, newToken],
        },
      },
    },
    ctx,
  }
}
export const addTokenSheep = ({ G, ctx }) => addToken({ G, ctx }, 'sheep')

export const bumpTool = ({ G, ctx }, tool) => {
  return {
    G: {
      ...G,
      toolSpaces: {
        ...G.toolSpaces,
        [tool]: {
          ...G.toolSpaces[tool],
          [ctx.currentPlayer]: G.toolSpaces[tool][ctx.currentPlayer] + 1,
        },
      },
    },
    ctx,
  }
}
export const bumpToolFishTraps = ({ G, ctx }) =>
  bumpTool({ G, ctx }, 'fishTraps')
