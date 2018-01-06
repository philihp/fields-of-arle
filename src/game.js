import Game from 'boardgame.io/game';
import store from './game/store'
import actionCreator from './game/actions/'
import { endTurn } from './game/actions/end_turn'

export default Game({
  setup: () => (store.getState()),

  moves: {
    commit(G, ctx) {
      store.dispatch(endTurn());
      return store.getState();
    },
    action(G, ctx, move) {
      store.dispatch(actionCreator(move)());
      return store.getState();
    }
  },

  victory: (G, ctx) => {
    return null
  }

});
