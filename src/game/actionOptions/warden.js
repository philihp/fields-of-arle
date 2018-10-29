import { compose } from 'redux'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { flipVehicle } from '../common/vehicle'
import { flipBuilding } from '../common/building'

const flipSingleFarm = ([row, col]) => player => ({
  ...player,
  land: [
    ...player.land.slice(0, row),
    [
      ...player.land[row].slice(0, col),
      flipBuilding(player.land[row][col]),
      ...player.land[row].slice(col + 1),
    ],
    ...player.land.slice(row + 1),
  ],
})

const flipIfSouthMoor = ([row, col]) => player => {
  if (player.land[row][col].type !== 'moorSouth') return player
  return flipSingleFarm([row, col])(player)
}

const warden = {
  barn: space => player => ({
    ...player,
    barn: {
      ...player.barn,
      [space]: flipVehicle(player.barn[space]),
    },
  }),
  farm: ([row, col]) =>
    compose(
      flipSingleFarm([row, col]),
      flipIfSouthMoor([row + 1, col])
    ),
}

export default ({ G, ctx, ...args }) => {
  const [type, ...params] = args.args
  return compose(
    actionOption(null),
    applyToCurrentPlayer(warden[type](params))
  )({ G, ctx, ...args }).G
}
