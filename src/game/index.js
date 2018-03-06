import { summerActionsReset } from './worker_spaces'

// import { createStore } from 'redux'
// import reducer from './reducers'

// const store = createStore(reducer)

const homeBoard = {
  tokens: [], // Floating tokens
  inventory: [], // Permanent tokens
  //   travelExperience: 0,
  goods: {
    food: 5,
    wool: 4,
    flax: 3,
    hides: 2,
    grain: 1,
  },
  //   tokens: [
  //     // { type: 'wood' },
  //     // { type: 'clay' },
  //     // { type: 'timber' },
  //     // { type: 'bricks' },
  //     // 'peat'
  //     // 'horse'
  //   ],
  land: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, { type: 'wheat', contents: [] }],
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
    ovens: [0, 0],
    axes: [0, 0],
    workbenches: [0, 0],
  },
}

export { initialState }

export default initialState
