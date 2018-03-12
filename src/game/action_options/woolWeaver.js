// import { addToken, addInventory } from "../common/player";

export default ({ G, ctx: { currentPlayer }, args }) => {
  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        inventory: [
          ...G.players[currentPlayer].inventory,
          ...Array(args).fill('woolen'),
        ],
        goods: {
          ...G.players[currentPlayer].goods,
          wool: G.players[currentPlayer].goods.wool - args,
        },
      },
    },
  }
}
