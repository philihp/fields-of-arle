import { Game, TurnOrder } from 'boardgame.io/core';
import initialState from './game/'

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
      if(G.halfYear === 9 && ctx.phase === 'November') {
        return 'ended due to rounds';
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
        onPhaseEnd: (G, ctx) => ({...G, halfYear: G.halfYear+1}),
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
