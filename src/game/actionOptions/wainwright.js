// getVehicle({ G, ctx, ...args }, 'peatBoat')
import { getVehicle, payForVehicle } from '../common/player'

const buyVehicle = (accum, vehicle) => {
  const gottenVehicle = getVehicle(accum, vehicle)
  const paidForVehicle = payForVehicle(gottenVehicle, vehicle)
  return paidForVehicle
}

export default ({ G, ctx, args }) => {
  const [vehiclesToBuy] = args
  return {
    ...vehiclesToBuy.reduce(buyVehicle, { G, ctx }).G,
    action: null,
  }
}
