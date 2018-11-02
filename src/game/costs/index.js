const costs = {
  farmersHouse: () => {}, // TODO
  plowMakersWorkshop: () => {}, // TODO
  novicesHut: () => {}, // TODO
  workshop: () => {}, // TODO
  weavingParlor: () => {}, // TODO
  colonistsHouse: () => {}, // TODO
  carpentersWorkshop: () => {}, // TODO
  schnappsDistillery: () => {}, // TODO
  loadingStation: () => {}, // TODO
  litterStorage: () => {}, // TODO
  woodTrader: () => {}, // TODO
  mill: () => {}, // TODO
  weavingMill: () => {}, // TODO
  textileHouse: () => {}, // TODO
  pottersInn: () => {}, // TODO
  farmersInn: () => {}, // TODO
  junkDealersInn: () => {}, // TODO
  gulfHouseInn: () => {}, // TODO
  milkHouseInn: () => {}, // TODO
  sluiceYardInn: () => {}, // TODO
}

export const buildingRequiresNoParams = building =>
  costs[building] === undefined

export default costs
