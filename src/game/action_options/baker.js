import { removeFirstItems } from '../common'

export default ({ G, ctx: { currentPlayer }, args }) => {
  const [times] = args
  if (times === 0) {
    return {
      ...G,
      action: null,
    }
  }

  const peatCount = G.players[currentPlayer].inventory.reduce(
    (accum, item) => accum + (item === 'peat' ? 1 : 0),
    0
  )

  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        inventory: G.players[currentPlayer].inventory
          .reduce(removeFirstItems('peat'), {
            list: [],
            count: times <= peatCount ? times : peatCount,
          })
          .list.reduce(removeFirstItems('wood'), {
            list: [],
            count: times <= peatCount ? 0 : times - peatCount,
          }).list,
        goods: {
          ...G.players[currentPlayer].goods,
          grain:
            G.players[currentPlayer].goods.grain >= times
              ? G.players[currentPlayer].goods.grain - times
              : 0,
          flax:
            G.players[currentPlayer].goods.flax -
            (G.players[currentPlayer].goods.grain >= times
              ? 0
              : times - G.players[currentPlayer].goods.grain),
          food: Math.min(G.players[currentPlayer].goods.food + times * 6, 30),
        },
      },
    },
  }
}
