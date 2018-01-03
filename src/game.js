import Game from 'boardgame.io/game';
import State from './game/state'

export default Game({
  setup: () => (new State()),

  moves: {
    explore(G, ctx, move) {
      let newState = {...G};
      console.log('Explored: ', move)
      return newState
    }
  },

  victory: (G, ctx) => {
    return null
  }

});
