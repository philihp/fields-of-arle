import { getVehicle, payForVehicle } from '../common/player'
import { place } from '../common/land'

const purchasePlow = (accum, withAnimal) => {
  if (!withAnimal) return accum
  const gottenVehicle = getVehicle(accum, 'plow')
  const paidForVehicle = payForVehicle(gottenVehicle, 'plow', withAnimal)
  return paidForVehicle
}

const placePlowedFields = (state, { crop, row, col }) =>
  place(crop)({ ...state, args: [{ row, col }] })

export default ({ G, ctx, args }) => {
  const [{ buyPlow, plowFields }] = args
  const G2 = purchasePlow({ G, ctx }, buyPlow).G
  const G3 = plowFields.reduce(placePlowedFields, { G: G2, ctx }).G
  return {
    ...G3,
    action: null,
  }
}
