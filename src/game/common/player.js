/*
Uncomposed utility functions, which you probably want to call with just
the single param {G, ctx}.
*/

export const setAction = ({ G, ctx, ...args }) => ({
  G: {
    ...G,
    action: args[0],
  },
  ctx,
})

export const addToken = ({ G, ctx }, newToken) => ({
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
})

export const addInventory = ({ G, ctx }, newInventory) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        inventory: [...G.players[ctx.currentPlayer].inventory, newInventory],
      },
    },
  },
  ctx,
})

export const bumpTool = ({ G, ctx }, tool) => ({
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
})

export const addGoods = ({ G, ctx }, good, amount) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        goods: {
          ...G.players[ctx.currentPlayer].goods,
          [good]: G.players[ctx.currentPlayer].goods[good] + amount,
        },
      },
    },
  },
  ctx,
})
