import { compose } from 'redux'
import { applyToCurrentPlayer } from '../common/player'

const clearAction = ({ G, ctx, ...args }) => ({
  G: { ...G, action: null },
  ctx,
  ...args,
})

const convertCheckedFieldsToForest = ({ args }) => player => {
  const locs = args[0].locs
  const land = JSON.parse(JSON.stringify(player.land))
  locs.forEach(([row, col]) => {
    land[row][col] = {
      ...land[row][col],
      type: 'forest',
    }
  })
  return {
    ...player,
    land,
  }
}

export default ({ G, ctx, ...args }) =>
  compose(
    applyToCurrentPlayer(convertCheckedFieldsToForest(args)),
    clearAction
  )({ G, ctx, ...args }).G
