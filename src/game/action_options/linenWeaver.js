export default ({ G, ctx: { currentPlayer }, args }) => {
  const [count] = args
  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        inventory: [
          ...G.players[currentPlayer].inventory,
          ...Array(count).fill('linen'),
        ],
        goods: {
          ...G.players[currentPlayer].goods,
          flax: Math.min(G.players[currentPlayer].goods.flax - count, 15),
        },
      },
    },
  }
}
