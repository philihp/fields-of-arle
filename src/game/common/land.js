const cellNotEmpty = cell => cell.type !== 'empty'
const rowNotEmpty = row => row.every(cellNotEmpty)
export const findSeaLevel = dikes => dikes.findIndex(rowNotEmpty)

export const buildDikes = times => ({ G, ctx, args }) => {
  const { currentPlayer } = ctx
  const dikes = G.players[currentPlayer].dikes.slice()
  const flatDikes = dikes.reduce((accum, row) => [...row, ...accum], [])
  times = Math.min(
    times,
    flatDikes
      .slice() // fucking reverse() will fucking mutate
      .reverse()
      .findIndex(cellNotEmpty)
  )
  const nextDikes = [...flatDikes.slice(-times), ...flatDikes.slice(0, -times)]
  const newDikes = [
    nextDikes.slice(9, 12),
    nextDikes.slice(6, 9),
    nextDikes.slice(3, 6),
    nextDikes.slice(0, 3),
  ]
  return {
    G: {
      ...G,
      players: {
        ...G.players,
        [currentPlayer]: {
          ...G.players[currentPlayer],
          dikes: newDikes,
        },
      },
    },
    ctx,
    args,
  }
}
