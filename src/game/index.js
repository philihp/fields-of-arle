import { summerActionsReset } from './workerSpaces'

// import { createStore } from 'redux'
// import reducer from './reducers'

// const store = createStore(reducer)

export const emptyLandCell = { type: 'empty', contents: [] }
export const emptyDikeCell = { type: 'empty', contents: [] }

const homeBoard = {
  tokens: [], // Floating tokens
  inventory: [
    'wood',
    'wood',
    'wood',
    'wood',
    'clay',
    'clay',
    'clay',
    'clay',
    'peat',
    'peat',
    'peat',
  ], // Permanent tokens
  //   travelExperience: 0,
  goods: {
    food: 5,
    wool: 4,
    flax: 3,
    hides: 2,
    grain: 1,
  },
  land: [
    [emptyLandCell, emptyLandCell, emptyLandCell],
    [emptyLandCell, emptyLandCell, emptyLandCell],
    [emptyLandCell, emptyLandCell, emptyLandCell],
    [emptyLandCell, emptyLandCell, { type: 'grain', contents: [] }],
    [
      {
        type: 'stall',
        contents: ['horse'],
      },
      { type: 'boardwalk', contents: ['peat', 'peat', 'peat', 'peat'] },
      { type: 'flax', contents: [] },
    ],
    [
      { type: 'moorNorth', contents: [] },
      { type: 'moorNorth', contents: [] },
      { type: 'moorNorth', contents: [] },
    ],
    [
      { type: 'moorSouth', contents: [] },
      { type: 'moorSouth', contents: [] },
      { type: 'moorSouth', contents: [] },
    ],
  ],
  dikes: [
    [emptyDikeCell, emptyDikeCell, emptyDikeCell],
    [emptyDikeCell, emptyDikeCell, emptyDikeCell],
    [
      { type: 'dike', contents: [] },
      { type: 'dike', contents: [] },
      emptyDikeCell,
    ],
    [
      { type: 'dike', contents: [] },
      { type: 'dike', contents: [] },
      { type: 'dike', contents: [] },
    ],
  ],
  destinations: [
    'norden',
    'hage',
    'beemoor',
    'dornum',
    'aurich',
    'esens',
    'emden',
    'leer',
    'bremen',
  ],
  barn: {
    small1: null,
    small2: null,
    small3: null,
    small4: null,
    large1: null,
    large2: null,
    large3: null,
  },
  supplyBottlenecks: 0,
}

const defaultLighthouseOwner = 0

export const initialState = {
  players: {
    0: homeBoard,
    1: homeBoard,
  },
  passed: {
    0: false,
    1: false,
  },
  halfYear: 1,
  action: null,
  workshop: null,
  unusedWorkshops: {
    0: [],
    1: [],
  },
  workerSpaces: summerActionsReset(defaultLighthouseOwner),
  lighthouse: {
    owner: defaultLighthouseOwner,
    used: false,
  },
  toolSpaces: {
    fishTraps: [0, 0],
    fleshingBeams: [0, 0],
    weavingLooms: [0, 0],
    slaughteringTables: [0, 0],
    spades: [0, 0],
    shovels: [0, 0],
    potteryWheels: [0, 0],
    ovens: [0, 0],
    axes: [0, 0],
    workbenches: [0, 0],
  },
  supplies: {
    forestPark: 5,
    stallDepot: 5,
    stableDoubleStall: 3,
    grainFlaxField: 10,
    cartHorseCart: 3,
    carriageDroshky: 3,
    handcartWagon: 2,
    peatBoatPlow: 6,
  },
}
