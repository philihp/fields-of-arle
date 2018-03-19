/*
Uncomposed utility functions, which you probably want to call with just
the single param {G, ctx}.
*/

export const setAction = ({ G, ctx, ...args }) => {
  return {
    G: {
      ...G,
      action: args[0],
    },
    ctx,
  }
}

export const addToken = ({ G, ctx, ...args }, newToken) => ({
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
  ...args,
})

export const addInventory = ({ G, ctx, ...args }, newInventoryList) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: {
        ...G.players[ctx.currentPlayer],
        inventory: [
          ...G.players[ctx.currentPlayer].inventory,
          ...newInventoryList,
        ],
      },
    },
  },
  ctx,
  ...args,
})

export const bumpTool = ({ G, ctx, ...args }, tool) => ({
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
  ...args,
})

export const addGoods = ({ G, ctx, ...args }, good, amount) => ({
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
  ...args,
})
