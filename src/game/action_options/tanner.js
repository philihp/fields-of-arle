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
          ...Array(args).fill('leather'),
        ],
        goods: {
          ...G.players[currentPlayer].goods,
          hide: G.players[currentPlayer].goods.hide - args,
        },
      },
    },
  }
}
