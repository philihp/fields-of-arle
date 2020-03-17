import { compose } from 'redux'
import { addGoodsToPlayer, setAction } from '../common/player'

const consume1Food = ({ G, ctx }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: addGoodsToPlayer({
        player: G.players[ctx.currentPlayer],
        good: 'food',
        amount: -1,
      }),
    },
  },
  ctx,
})

export default (G, ctx, ...args) =>
  compose(consume1Food, setAction)({ G, ctx, ...args }).G
