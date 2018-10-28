import { compose } from 'redux'
import { identity } from '../common/index'
import { applyToCurrentPlayer, curriedAddGoodsToPlayer } from '../common/player'

export const size = 1

const sellField = field => {
  if (field === null) return identity
  return player => {
    const [_, colStr, rowStr] = field[0].split('-')
    const col = Math.trunc(colStr)
    const row = Math.trunc(rowStr)
    return {
      ...player,
      land: [
        ...player.land.slice(0, row),
        [
          ...player.land[row].slice(0, col),
          {
            ...player.land[row][col],
            type: 'empty',
          },
          ...player.land[row].slice(col + 1),
        ],
        ...player.land.slice(row + 1),
      ],
    }
  }
}

const convertField = field => {
  if (field === null) return identity
  return compose(
    sellField(field),
    curriedAddGoodsToPlayer('food', 1)
  )
}

export default conversionInputs =>
  applyToCurrentPlayer(convertField(conversionInputs[0]))
