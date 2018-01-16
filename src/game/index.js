import { summerActionsReset } from './worker_spaces'

// import { createStore } from 'redux'
// import reducer from './reducers'

// const store = createStore(reducer)


// const homeBoard = {
//   travelExperience: 0,

//   goods: {
//     food1: 5,
//     wool: 4,
//     flax: 3,
//     hides: 2,
//     grain: 1,
//     food2: 0,
//   },
//   tokens: [
//     // { type: 'wood' },
//     // { type: 'clay' },
//     // { type: 'timber' },
//     // { type: 'bricks' },
//     // 'peat'
//     // 'horse'
//   ],
//   land: [
//     [ null, null, null ],
//     [ null, null, null ],
//     [ null, null, null ],
//     [
//       null,
//       null,
//       { type: 'wheat', contents: [] },
//     ],
//     [
//       { type: 'stall', contents: [ 'horse' ] },
//       { type: 'boardwalk', contents: ['peat', 'peat', 'peat', 'peat' ] },
//       { type: 'flax', contents: [] },
//     ],
//     [
//       { type: 'north_moor', contents: [] },
//       { type: 'north_moor', contents: [] },
//       { type: 'north_moor', contents: [] },
//     ],
//     [
//       { type: 'south_moor', contents: [] },
//       { type: 'south_moor', contents: [] },
//       { type: 'south_moor', contents: [] },
//     ],
//   ],
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
// }

const defaultLighthouseOwner = 0

const initialState = {
  passed: {
    0: false,
    1: false,
  },
  halfYear: 1,
  workerSpaces: summerActionsReset(defaultLighthouseOwner),
  lighthouse: {
    owner: defaultLighthouseOwner,
    used: false,
  },
  toolSpaces: {
    fishTraps: [ 0, 0 ],
    fleshingBeams: [ 0, 0 ],
    weavingLooms: [ 0, 0 ],
    slaughteringTables: [ 0, 0 ],
    spades: [ 0, 0 ],
    shovelPairs: [ 0, 0 ],
    potteryWheels: [ 0, 0 ],
    ovens: [ 0, 0 ],
    axes: [ 0, 0 ],
    workbenches: [ 0, 0 ],
  },
  // homeBoards: [
  //   { ...homeBoard, startingPlayer: true },
  //   { ...homeBoard, startingPlayer: false },
  // ],
}

export {
  initialState
};

export default initialState;
