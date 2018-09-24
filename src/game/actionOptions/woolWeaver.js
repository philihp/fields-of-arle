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
          ...Array(count).fill('woolen'),
        ],
        goods: {
          ...G.players[currentPlayer].goods,
          wool: Math.min(G.players[currentPlayer].goods.wool - count, 15),
        },
      },
    },
  }
}
