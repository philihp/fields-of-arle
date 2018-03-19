import { summerActionsReset } from './worker_spaces'

// import { createStore } from 'redux'
// import reducer from './reducers'

// const store = createStore(reducer)

export const emptyLandCell = { type: 'empty', contents: [] }

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
    [emptyLandCell, emptyLandCell, { type: 'wheat', contents: [] }],
    [
      { type: 'stall', contents: ['horse'] },
      { type: 'boardwalk', contents: ['peat', 'peat', 'peat', 'peat'] },
      { type: 'flax', contents: [] },
    ],
    [
      { type: 'moor_north', contents: [] },
      { type: 'moor_north', contents: [] },
      { type: 'moor_north', contents: [] },
    ],
    [
      { type: 'moor_south', contents: [] },
      { type: 'moor_south', contents: [] },
      { type: 'moor_south', contents: [] },
    ],
  ],
  //   dikes: [
  //     [ null, null, null ],
  //     [ null, null, null ],
  //     [
  //       { type: 'dike', with: [] },
  //       { type: 'dike', with: [] },
  //       null
  //     ],
  //     [
  //       { type: 'dike', with: [] },
  //       { type: 'dike', with: [] },
  //       { type: 'dike', with: [] },
  //     ],
  //   ]
}

const defaultLighthouseOwner = 0

const initialState = {
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
    shovelPairs: [0, 0],
    potteryWheels: [0, 0],
    ovens: [3, 3], // TODO make zero zero
    axes: [0, 0],
    workbenches: [0, 0],
  },
}

export { initialState }

export default initialState
