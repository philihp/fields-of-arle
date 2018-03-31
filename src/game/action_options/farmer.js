// getVehicle({ G, ctx, ...args }, 'peatBoat')
import { getVehicle, payForVehicle } from '../common/player'

const purchasePlow = (accum, withAnimal) => {
  const gottenVehicle = getVehicle(accum, 'plow')
  const paidForVehicle = payForVehicle(gottenVehicle, 'plow', withAnimal)
  return paidForVehicle
}

export default ({ G, ctx, args }) => {
  const [{ buyPlow, plowFields }] = args
  const G2 = buyPlow ? purchasePlow({ G, ctx }, buyPlow).G : G
  return {
    ...G2,
    action: null,
  }
}
