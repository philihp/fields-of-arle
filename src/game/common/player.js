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

export const arrangeItem = ({ G, ctx, ...args }, { src, dst }) => {
  console.log('G: ', G)
  console.log('ctx: ', ctx)
  console.log('src: ', src)
  console.log('dst: ', dst)
  const player = G.players[ctx.currentPlayer]
  const removedItem = player[src.type][src.row][src.col].contents[src.i]
  const player2 = {
    ...player,
    [src.type]: [
      ...player[src.type].slice(0, src.row),
      [
        ...player[src.type][src.row].slice(0, src.col),
        {
          ...player[src.type][src.row][src.col],
          contents: [
            ...player[src.type][src.row][src.col].contents.slice(0, src.i),
            ...player[src.type][src.row][src.col].contents.slice(src.i + 1),
          ],
        },
        ...player[src.type][src.row].slice(src.col + 1),
      ],
      ...player[src.type].slice(src.row + 1),
    ],
  }
  const player3 = {
    ...player2,
    [dst.type]: [
      ...player2[dst.type].slice(0, dst.row),
      [
        ...player2[dst.type][dst.row].slice(0, dst.col),
        {
          ...player2[dst.type][dst.row][dst.col],
          contents: [
            ...player2[dst.type][dst.row][dst.col].contents,
            removedItem,
          ],
        },
        ...player2[dst.type][dst.row].slice(dst.col + 1),
      ],
      ...player2[dst.type].slice(dst.row + 1),
    ],
  }

  return {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: player3,
    },
  }
}
