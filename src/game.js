import { Game } from 'boardgame.io/core';
import initialState from './game/'
// import actionCreator from './game/actions/'
// import { endTurn } from './game/actions/end_turn'

const game = Game({
  setup: () => (initialState),

  moves: {
    commit(G, ctx) {
      // store.dispatch(endTurn());
      return G;
    }
  },

  victory: (G, ctx) => {
    return null
  }

});

export default game;
