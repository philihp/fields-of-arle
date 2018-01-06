import Game from 'boardgame.io/game';
import store from './game/store'
import actionCreator from './game/actions/'

export default Game({
  setup: () => (store.getState()),

  moves: {
    explore(G, ctx, move) {
      store.dispatch(actionCreator(move)());
      return store.getState()
    }
  },

  victory: (G, ctx) => {
    return null
  }

});
