const actionSpaces = {
  fisherman: null,
  summerGrocer: null,
  woolWeaver: null,
  colonist: null,
  peatCutter: null,
  dikeBuilder: null,
  clayWorker: null,
  farmer: null,
  forester: null,
  woodcutter: null,
  summerMaster: null,
  summerCarpenter: null,
  builder: null,
  warden: null,
  summerLaborer: null,
  peatBoatman: null,
  tanner: null,
  linenWeaver: null,
  butcher: null,
  cattleTrader: null,
  winterGrocer: null,
  buildersMerchant: null,
  potter: null,
  baker: null,
  woodTrader: null,
  winterMaster: null,
  wainwright: null,
  dikeWarden: null,
  winterCarpenter: null,
  winterLaborer: null,
}

const startSpaces = (numPlayers, startPlayer) =>
  Array.from({ length: numPlayers }, (v, i) => (i + startPlayer) % numPlayers)

const summerPrepSpaces = (numPlayers, startPlayer) => ({
  july: startSpaces(numPlayers, startPlayer),
  august: startSpaces(numPlayers, startPlayer),
  september: startSpaces(numPlayers, startPlayer),
  october: startSpaces(numPlayers, startPlayer),
  january: [],
  february: [],
  march: [],
  april: [],
})

const winterPrepSpaces = (numPlayers, startPlayer) => ({
  july: [],
  august: [],
  september: [],
  october: [],
  january: startSpaces(numPlayers, startPlayer),
  february: startSpaces(numPlayers, startPlayer),
  march: startSpaces(numPlayers, startPlayer),
  april: startSpaces(numPlayers, startPlayer),
})

export const summerActionsReset = (numPlayers, startPlayer) => ({
  ...actionSpaces,
  ...summerPrepSpaces(numPlayers, startPlayer),
})

export const winterActionsReset = (numPlayers, startPlayer) => ({
  ...actionSpaces,
  ...winterPrepSpaces(numPlayers, startPlayer),
})
