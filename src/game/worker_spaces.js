
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

const otherPlayer = startPlayer => -1*(startPlayer-1)

const summerPrepSpaces = startPlayer => ({
  july: [ startPlayer, otherPlayer(startPlayer) ],
  august: [ startPlayer, otherPlayer(startPlayer) ],
  september: [ startPlayer, otherPlayer(startPlayer) ],
  october: [ startPlayer, otherPlayer(startPlayer) ],
  january: [],
  february: [],
  march: [],
  april: []
})

const winterPrepSpaces = startPlayer => ({
  july: [],
  august: [],
  september: [],
  october: [],
  january: [ startPlayer, otherPlayer(startPlayer) ],
  february: [ startPlayer, otherPlayer(startPlayer) ],
  march: [ startPlayer, otherPlayer(startPlayer) ],
  april: [ startPlayer, otherPlayer(startPlayer) ],
})

const summerActionsReset = startPlayer => ({
  ...actionSpaces,
  ...summerPrepSpaces(startPlayer),
})

const winterActionsReset = startPlayer => ({
  ...actionSpaces,
  ...winterPrepSpaces(startPlayer),
})

export {
  summerActionsReset,
  winterActionsReset,
};
