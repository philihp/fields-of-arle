import { removeFirstItems } from '../common'

const removeClay = removeFirstItems('clay')

export default ({ G, ctx: { currentPlayer }, args }) => {
  const inventorySansClay = G.players[currentPlayer].inventory.reduce(
    removeClay,
    {
      list: [],
      count: args,
    }
  ).list
  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        inventory: [...inventorySansClay, ...Array(args).fill('peat')],
        goods: {
          ...G.players[currentPlayer].goods,
          food: Math.min(G.players[currentPlayer].goods.food + args * 3, 30),
        },
      },
    },
  }
}
