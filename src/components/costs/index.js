import smallHouse from './smallHouse'
import mill from './mill'
import weavingMill from './weavingMill'
import textileHouse from './textileHouse'
import inn from './inn'

export default {
  farmersHouse: smallHouse,
  novicesHut: smallHouse,
  plowMakersWorkshop: smallHouse,
  workshop: smallHouse,
  weavingParlor: smallHouse,
  carpentersWorkshop: smallHouse,
  colonistsHouse: smallHouse,
  loadingStation: smallHouse,
  schnappsDistillery: smallHouse,
  litterStorage: smallHouse,
  woodTrader: smallHouse,

  mill,
  weavingMill,
  textileHouse,

  pottersInn: inn,
  farmersInn: inn,
  junkDealersInn: inn,
  milkHouseInn: inn,
  sluiceYardInn: inn,
  gulfHouseInn: inn,
}
