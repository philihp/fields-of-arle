import { compose } from 'redux'
// import { identity } from '../common/index'
import { actionOption, applyToCurrentPlayer } from '../common/player'
import { flipVehicle } from '../common/vehicle'
import { flipBuilding } from '../common/building'

const warden = {
  barn: space => player => ({
    ...player,
    barn: {
      ...player.barn,
      [space]: flipVehicle(player.barn[space]),
    },
  }),
  farm: ([row, col]) => player => ({
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
  }),
}

export default ({ G, ctx, ...args }) => {
  const [type, ...params] = args.args
  return compose(
    actionOption(null),
    applyToCurrentPlayer(warden[type](params))
  )({ G, ctx, ...args }).G
}
