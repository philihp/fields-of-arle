
const actionSpaces = {
  // fisherman: null,
  // grocer: null,
  // woolWeaver: null,
  // colonist: null,
  // peatCutter: null,
  // dikeBuilder: null,
  // clayWorker: null,
  farmer: null,
  forester: null,
  woodcutter: null,
  summerMaster: null,
  summerCarpenter: null,
  builder: null,
  warden: null,
  summerLaborer: null,
  // peatBoatman: null,
  // tanner: null,
  // linenWeaver: null,
  // butcher: null,
  // cattleTrader: null,
  // grocer: null,
  // buildersMerchant: null,
  potter: null,
  baker: null,
  woodTrader: null,
  winterMaster: null,
  wainwright: null,
  dikeWarden: null,
  winterCarpenter: null,
  winterLaborer: null,
}

const summerPrepSpaces = {
  july: [ 0, 1 ],
  august: [ 0, 1 ],
  september: [ 0, 1 ],
  october: [ 0, 1 ],
  january: [],
  february: [],
  march: [],
  april: []
}

const winterPrepSpaces = {
  july: [],
  august: [],
  september: [],
  october: [],
  january: [ 0, 1 ],
  february: [ 0, 1 ],
  march: [ 0, 1 ],
  april: [ 0, 1 ],
}

const summerActionsReset = {
  ...actionSpaces,
  ...summerPrepSpaces,
}

const winterActionsReset = {
  ...actionSpaces,
  ...winterPrepSpaces,
}

export {
  summerActionsReset,
  winterActionsReset,
};
