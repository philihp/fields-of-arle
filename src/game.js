import Game from 'boardgame.io/game';

const R = 'R'
const Y = 'Y'
const _ = null

export default Game({
  G: {
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
    round: 1, //odd are summer, even are winter, 1-9
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
  },

  moves: {
    placeWorker(G, ctx, id) {
      let newState = {...G};
      newState.round++;
      debugger;
      return newState
    }
  },

  victory: (G, ctx) => {
    return null
  }

});
