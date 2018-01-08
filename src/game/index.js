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

const initialState = {
  halfYear: 1,
  preparations: [
    [ 0, 1 ],
    [ 0, 1 ],
    [ 0, 1 ],
    [ 0, 1 ],
    [ ],
    [ ],
    [ ],
    [ ],
  ],
  actions: {
    summer: {
      // fisherman: null,
      // grocer: null,
      // woolWeaver: null,
      // colonist: null,
      // peatCutter: null,
      // dikeBuilder: null,
      // clayWorker: null,
      // farmer: null,
      // forester: null,
      woodcutter: null,
      master: null,
      carpenter: null,
      builder: null,
      warden: null,
      laborer: null,
    },
    winter: {
      // peatBoatman: null,
      // tanner: null,
      // linenWeaver: null,
      // butcher: null,
      // cattleTrader: null,
      // grocer: null,
      // buildersMerchant: null,
      // potter: null,
      // baker: null,
      woodTrader: null,
      master: null,
      wainwright: null,
      dikeWarden: null,
      carpenter: null,
      laborer: null,
    }
  },
  tools: {
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
