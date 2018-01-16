import { Game } from 'boardgame.io/core'

// import { pickWorker } from './game/common/'
import initialState from './game/'
import { winterActionsReset, summerActionsReset } from './game/worker_spaces';

// const summerActions = ['woodcutter','summerMaster','summerCarpenter','laborer','builder','warden']
// const winterActions = ['woodTrader','winterMaster','winterCarpenter','wainwright','dikeWarden','laborer']

const lighthouseTurnOrder = {
  first: (G, ctx) => G.lighthouse.owner,
  next: (G, ctx) => -(G.lighthouse.owner - 1),
}

const game = Game({
  setup: () => (initialState),

  moves: {
    action(G, ctx, job, offSeason) {
      if(G.workerSpaces[job] == null) {
        return {...G,
          lighthouse: {
            owner: (offSeason ? -(+ctx.currentPlayer-1) : G.lighthouse.owner),
            used: G.lighthouse.used || offSeason,
          },
          workerSpaces: {
            ...G.workerSpaces,
            [ctx.phase]: G.workerSpaces[ctx.phase].slice(1),
            [job]: G.workerSpaces[ctx.phase][0]
          }
        }
      }
    },
  },

  flow: {
    endGameIf: (G, ctx) => {
      if(G.halfYear === 9 && ctx.phase === 'november') {
        return 'ended due to rounds';
      }
    },
    phases: [
      {
        name: 'july',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'august',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'september',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'october',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'november',
        allowedMoves: [],
        endPhaseIf: (G, ctx) => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => ({...G, halfYear: G.halfYear+1}),
      },
      {
        name: 'december',
        allowedMoves: [],
        endPhaseIf: (G, ctx) => true,
        onPhaseBegin: (G, ctx) => ({...G,
          workerSpaces: winterActionsReset(+ctx.currentPlayer)
        }),
        onPhaseEnd: (G, ctx) => G,
      },
      {
        name: 'january',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'february',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'march',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'april',
        allowedMoves: ['action'],
        endPhaseIf: (G, ctx) => G.workerSpaces[ctx.phase].length === 0,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: lighthouseTurnOrder,
      },
      {
        name: 'may',
        allowedMoves: [],
        endPhaseIf: (G, ctx) => true,
        onPhaseBegin: (G, ctx) => G,
        onPhaseEnd: (G, ctx) => ({...G, halfYear: G.halfYear+1}),
      },
      {
        name: 'june',
        allowedMoves: [],
        endPhaseIf: (G, ctx) => true,
        onPhaseBegin: (G, ctx) => ({...G,
          workerSpaces: summerActionsReset(+ctx.currentPlayer)
        }),
        onPhaseEnd: (G, ctx) => G,
      },
    ]
  },


});

export default game;
