import { afford, distinct } from '../common'

const playerFromG = (G, ctx) => G.players[ctx.currentPlayer]

const smallHouse = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    player.goods.food >= 1 &&
    player.inventory.find(k => ['clay', 'wood', 'brick', 'timber'].includes(k))
  )
}

const minorCraftBuilding = (G, ctx) =>
  afford(playerFromG(G, ctx).inventory, ['timber', 'brick'])

const mill = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    afford(player.inventory, ['timber']) &&
    (player.goods.flax >= 8 || player.goods.grain >= 8)
  )
}

const weavingMill = (G, ctx) => {
  const player = playerFromG(G, ctx)
  const hasBrick = afford(player.inventory, ['brick', 'brick'])
  const hasFlax = player.goods.flax >= 10
  const hasWool = player.goods.wool >= 10
  return hasBrick && (hasFlax || hasWool)
}

const textileHouse = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    afford(player.inventory, ['brick']) &&
    distinct(player.inventory, ['summerWear', 'winterWear', 'leatherWear']) >= 2
  )
}

const saddlery = (G, ctx) =>
  afford(playerFromG(G, ctx).inventory, [
    'timber',
    'timber',
    'leather',
    'leather',
    'leather',
  ])

const joinery = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    afford(player.inventory, ['timber', 'timber']) && player.goods.grain >= 5
  )
}

const waterfrontHouse = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return afford(player.inventory, ['brick', 'brick']) && player.goods.food >= 25
}

const innTile = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    player.goods.food >= 9 &&
    distinct(player.inventory, ['wood', 'clay', 'brick', 'timber']) >= 2
  )
}

const largeBuilding = (G, ctx) => {
  const player = playerFromG(G, ctx)
  return (
    afford(player.inventory, [
      'timber',
      'timber',
      'timber',
      'brick',
      'brick',
      'brick',
    ]) && player.goods.food >= 15
  )
}

export default {
  farmersHouse: smallHouse,
  plowMakersWorkshop: smallHouse,
  novicesHut: smallHouse,
  workshop: smallHouse,
  weavingParlor: smallHouse,
  colonistsHouse: smallHouse,
  carpentersWorkshop: smallHouse,
  schnappsDistillery: smallHouse,
  loadingStation: smallHouse,
  litterStorage: smallHouse,
  woodTrader: smallHouse,
  turnery: minorCraftBuilding,
  smokehouse: minorCraftBuilding,
  smithy: minorCraftBuilding,
  cooperage: minorCraftBuilding,
  bakehouse: minorCraftBuilding,
  mill,
  weavingMill,
  textileHouse,
  saddlery,
  joinery,
  waterfrontHouse,
  pottersInn: innTile,
  farmersInn: innTile,
  junkDealersInn: innTile,
  gulfHouseInn: innTile,
  milkHouseInn: innTile,
  sluiceYardInn: innTile,
  villageChurch: largeBuilding,
  lutetsburgCastle: largeBuilding,
  berumCastle: largeBuilding,
}
