import Game from 'boardgame.io/game';

const R = 'R'
const Y = 'Y'
const _ = null

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
