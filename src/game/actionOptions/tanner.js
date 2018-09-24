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
          ...Array(count).fill('leather'),
        ],
        goods: {
          ...G.players[currentPlayer].goods,
          hide: G.players[currentPlayer].goods.hide - count,
        },
      },
    },
  }
}
