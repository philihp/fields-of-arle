import { compose } from 'redux'
import { actionOption, applyToCurrentPlayer } from '../common/player'

const convertCheckedFieldsToForest = ({ args }) => ({ G, ctx }) => {
  const locs = args[0].locs
  const returnedFields = locs.length

  const player = G.players[ctx.currentPlayer]
  const newPlayer = JSON.parse(JSON.stringify(player))

  locs.forEach(([row, col]) => {
    newPlayer.land[row][col] = {
      ...newPlayer.land[row][col],
      type: 'forest',
    }
  })
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: newPlayer,
      },
      supplies: {
        ...G.supplies,
        grainFlaxField: G.supplies.grainFlaxField + returnedFields,
      },
    },
    ctx,
  }
}

export default ({ G, ctx, ...args }) =>
  compose(
    convertCheckedFieldsToForest(args),
    actionOption(null)
  )({ G, ctx, ...args }).G
