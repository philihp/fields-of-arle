import Game from 'boardgame.io/game';

const R = 'R'
const Y = 'Y'
const _ = null

let homeBoard = {
  startingPlayer: false,
  travelExperience: 0,
  wood: 0,
  timber: 0,
  clay: 0,
  brick: 0,
  linen: 0,
  wool: 0,
  leather: 0,
  land: [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ],
    [
      null,
      null,
      { type: 'wheat', contents: [] },
    ],
    [
      { type: 'stall', contents: [ 'horse' ] },
      { type: 'boardwalk', contents: ['peat', 'peat', 'peat', 'peat' ] },
      { type: 'flax', contents: [] },
    ],
    [
      { type: 'north_moor', contents: [] },
      { type: 'north_moor', contents: [] },
      { type: 'north_moor', contents: [] },
    ],
    [
      { type: 'south_moor', contents: [] },
      { type: 'south_moor', contents: [] },
      { type: 'south_moor', contents: [] },
    ],
  ],
  dikes: [
    [ null, null, null ],
    [ null, null, null ],
    [
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
      null
    ],
    [
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
    ],
  ]
}

let redHomeBoard = JSON.parse(JSON.stringify(homeBoard));
let yellowHomeBoard = JSON.parse(JSON.stringify(homeBoard));

redHomeBoard.startingPlayer = true;

export default Game({
  setup: () => ({
    round: 1, //half-years; odd are summer, even are winter, 1-9
    month: 'jun',
    actions: {
      summer: {
        fisherman: _,
        grocer: _,
        woolWeaver: _,
        colonist: _,
        peatCutter: _,
        dikeBuilder: _,
        clayWorker: _,
        farmer: _,
        forester: _,
        woodcutter: _,
        master: _,
        carpenter: _,
        builder: _,
        warden: _,
        laborer: _,
      },
      winter: {
        peatBoatman: _,
        tanner: _,
        linenWeaver: _,
        butcher: _,
        cattleTrader: _,
        grocer: _,
        buildersMerchant: _,
        potter: _,
        baker: _,
        woodTrader: _,
        master: _,
        wainwright: _,
        dikeWarden: _,
        carpenter: _,
        laborer: _,
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
    preparations: {
      july: {
        hi: R,
        lo: Y
      },
      august: {
        hi: R,
        lo: Y
      },
      september: {
        hi: R,
        lo: Y
      },
      october: {
        hi: R,
        lo: Y
      },
      january: {
        hi: _,
        lo: _
      },
      february: {
        hi: _,
        lo: _
      },
      march: {
        hi: _,
        lo: _
      },
      april: {
        hi: _,
        lo: _
      },
    },
    homeBoards: [
      redHomeBoard,
      yellowHomeBoard,
    ]
  }),

  moves: {
    placeWorker(G, ctx, id) {
      let newState = {...G};
      return newState
    }
  },

  victory: (G, ctx) => {
    return null
  }

});
