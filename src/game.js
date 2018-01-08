import { Game, TurnOrder } from 'boardgame.io/core';
import initialState from './game/'
// import actionCreator from './game/actions/'
// import { endTurn } from './game/actions/end_turn'

const game = Game({
  setup: () => (initialState),

  moves: {
    commit(G, ctx) {
      return G;
    }
  },

  flow: {
    turnOrder: TurnOrder.DEFAULT,
    endGameIf: (G, ctx) => {
      if(ctx.turn == 9*6 /* 9 half-years, with 6 months each */) {
        return true;
      }
    },
    phases: [
      {
        name: 'July',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'August',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'September',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'October',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'November',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'June',
        allowedMoves: ['commit'],
        endPhaseIf: G => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
      },
    ]
  },


});

export default game;
