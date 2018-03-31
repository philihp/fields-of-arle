const barnVehicles = barn => [
  barn.small1,
  barn.small2,
  barn.small3,
  barn.small4,
  barn.large1,
  barn.large2,
  barn.large3,
]

export const firstOpenSmallSpace = barn => {
  if (!barn.small1) return 'small1'
  else if (!barn.small2) return 'small2'
  else if (!barn.small3) return 'small3'
  else if (!barn.small4) return 'small4'
  else if (!barn.large3) return 'large3'
  else return null
}

export const firstOpenLargeSpace = barn => {
  if (!barn.large1) return 'large1'
  else if (!barn.large2) return 'large2'
  else if (!barn.large3) return 'large3'
  else return null
}

const SmallVehicles = ['handcart', 'wagon', 'peatBoat', 'plow']
const LargeVehicles = ['cart', 'horseCart', 'carriage', 'droshky']

export const EquipmentCosts = {
  peatBoat: ['wood'],
  plow1: ['wood', 'horse'], // UHHHHHHH
  plow2: ['wood', 'cattle'], // UHHHHHHH
  handcart: ['wood', 'wood'],
  wagon: ['wood', 'wood', 'wood', 'wood'],
  cart: ['wood', 'wood', 'wood', 'wood', 'wood', 'wood', 'wood', 'horse'],
  horseCart: ['wood', 'wood', 'wood', 'wood', 'horse', 'horse'],
  carriage: ['wood', 'wood', 'wood', 'wood', 'wood', 'horse', 'horse'],
  droshky: ['wood', 'wood', 'wood', 'wood', 'wood', 'wood', 'horse', 'horse'],
}
export const Vehicles = [
  'handcart',
  'wagon',
  'cart',
  'horseCart',
  'carriage',
  'droshky',
]

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

export const openBarnSpace = (barn, type) => {
  if (SmallVehicles.includes(type)) return firstOpenSmallSpace(barn)
  else if (LargeVehicles.includes(type)) return firstOpenLargeSpace(barn)
  else return null
}

export const countVehicle = (barn, type) =>
  barnVehicles(barn).filter(vehicle => vehicle === type).length
