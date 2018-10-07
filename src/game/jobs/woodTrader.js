import { compose } from 'redux'
import { addGoodsToPlayer, setAction } from '../common/player'

const consume1FoodOr1Grain = ({ G, ctx }) => ({
  G: {
    ...G,
    players: {
      ...G.players,
      [ctx.currentPlayer]: compose(
        player =>
          addGoodsToPlayer({
            player,
            good: 'food',
            amount: G.players[ctx.currentPlayer].goods.food > 0 ? -1 : 0,
          }),
        player =>
          addGoodsToPlayer({
            player,
            good: 'grain',
            amount: G.players[ctx.currentPlayer].goods.food > 0 ? 0 : -1,
          })
      )(G.players[ctx.currentPlayer]),
    },
  },
  ctx,
})

export default (G, ctx, ...args) =>
  compose(
    consume1FoodOr1Grain,
    setAction
  )({ G, ctx, ...args }).G
