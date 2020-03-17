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

const startSpaces = (numberPlayers, startPlayer) =>
  Array.from(
    { length: numberPlayers },
    (v, i) => (i + startPlayer) % numberPlayers
  )

const summerPrepSpaces = (numberPlayers, startPlayer) => ({
  july: startSpaces(numberPlayers, startPlayer),
  august: startSpaces(numberPlayers, startPlayer),
  september: startSpaces(numberPlayers, startPlayer),
  october: startSpaces(numberPlayers, startPlayer),
  january: [],
  february: [],
  march: [],
  april: [],
})

const winterPrepSpaces = (numberPlayers, startPlayer) => ({
  july: [],
  august: [],
  september: [],
  october: [],
  january: startSpaces(numberPlayers, startPlayer),
  february: startSpaces(numberPlayers, startPlayer),
  march: startSpaces(numberPlayers, startPlayer),
  april: startSpaces(numberPlayers, startPlayer),
})

export const summerActionsReset = (numberPlayers, startPlayer) => ({
  ...actionSpaces,
  ...summerPrepSpaces(numberPlayers, startPlayer),
})

export const winterActionsReset = (numberPlayers, startPlayer) => ({
  ...actionSpaces,
  ...winterPrepSpaces(numberPlayers, startPlayer),
})
