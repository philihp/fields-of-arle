import { summerActionsReset } from './workerSpaces'

export const emptyLandCell = { type: 'empty', contents: [] }
export const emptyDikeCell = { type: 'empty', contents: [] }

const homeBoard = {
  tokens: [], // Floating tokens
  inventory: [
    'timber', // TODO remove
    'timber',
    'timber',
    'timber',
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
    'leather',
    'leather',
    'leather',
  ], // Permanent tokens
  travelExperience: 0,
  goods: {
    food: 5,
    wool: 4,
    flax: 3,
    hide: 2,
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

export const initialState = numPlayers => {
  const players = { ...new Array(numPlayers).fill(homeBoard) }
  const passed = { ...new Array(numPlayers).fill(false) }
  const emptyTools = new Array(numPlayers).fill(0)
  return {
    players,
    passed,
    halfYear: 1,
    action: null,
    workshop: null,
    usedWorkshops: [],
    workerSpaces: summerActionsReset(numPlayers, defaultLighthouseOwner),
    lighthouse: {
      owner: defaultLighthouseOwner,
      used: numPlayers === 1,
    },
    toolSpaces: {
      fishTraps: emptyTools,
      fleshingBeams: emptyTools,
      weavingLooms: emptyTools,
      slaughteringTables: emptyTools,
      spades: emptyTools,
      shovels: emptyTools,
      potteryWheels: emptyTools,
      ovens: emptyTools,
      axes: emptyTools,
      workbenches: emptyTools,
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
}
