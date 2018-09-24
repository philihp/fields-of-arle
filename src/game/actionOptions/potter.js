import { removeFirstItems } from '../common'

const removeClay = removeFirstItems('clay')

export default ({ G, ctx: { currentPlayer }, args }) => {
  const [count] = args
  const inventorySansClay = G.players[currentPlayer].inventory.reduce(
    removeClay,
    {
      list: [],
      count: count,
    }
  ).list
  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        inventory: [...inventorySansClay, ...Array(count).fill('peat')],
        goods: {
          ...G.players[currentPlayer].goods,
          food: Math.min(G.players[currentPlayer].goods.food + count * 3, 30),
        },
      },
    },
  }
}
