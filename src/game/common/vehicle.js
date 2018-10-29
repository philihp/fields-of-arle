import { VehicleSlots } from './barn'

export const VehicleSource = {
  handcart: 'handcartWagon',
  wagon: 'handcartWagon',
  peatBoat: 'peatBoatPlow',
  plow: 'peatBoatPlow',
  cart: 'cartHorseCart',
  horseCart: 'cartHorseCart',
  carriage: 'carriageDroshky',
  droshky: 'carriageDroshky',
}

const upgradedVehicle = {
  handcart: 'wagon',
  peatBoat: 'plow',
  cart: 'horseCart',
  carriage: 'droshky',
}

export const flipVehicle = vehicle => {
  if (upgradedVehicle[vehicle.type] === undefined) return vehicle
  const type = upgradedVehicle[vehicle.type]
  return {
    ...vehicle,
    type,
    contents: [
      ...vehicle.contents,
      ...VehicleSlots[type].slice(vehicle.contents.length),
    ],
  }
}
