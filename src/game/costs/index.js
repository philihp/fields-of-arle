import { identity } from '../common/index'

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

  turnery: identity,
  smokehouse: identity,
  smithy: identity,
  cooperage: identity,
  bakehouse: identity,
  saddlery: identity,
  joinery: identity,
  waterfrontHouse: identity,
  villageChurch: identity,
  lutetsbergCastle: identity,
  berumCastle: identity,
}

export const buildingRequiresNoParams = building => costs[building] === identity

export default costs
