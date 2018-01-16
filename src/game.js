import { Game } from 'boardgame.io/core'

// import { pickWorker } from './game/common/'
import initialState from './game/'
import { winterActionsReset, summerActionsReset } from './game/worker_spaces';

// const summerActions = ['woodcutter','summerMaster','summerCarpenter','laborer','builder','warden']
// const winterActions = ['woodTrader','winterMaster','winterCarpenter','wainwright','dikeWarden','laborer']

const inventoryingTurnOrder = {
  first: (G, ctx) => +ctx.currentPlayer,
  next: (G, ctx) => -(+ctx.currentPlayer - 1),
}

const preparationsTurnOrder = {
  // this feels weird. it feels like it should just be the lighthouse owner...
  // but something is calling next, which flips the turn back.
  first: (G) => -(+G.lighthouse.owner - 1),
  next: (G, ctx) => -(+ctx.currentPlayer - 1),
}

const actionTurnOrder = {
  first: (G, ctx) => G.workerSpaces[ctx.phase][0],
  next: (G, ctx) => G.workerSpaces[ctx.phase][0],
}

const allPlayersPassed = (G, ctx) => Object.values(G.passed).every(b => b)

const resetPassed = (G, ctx) => ({ ...G,
  passed: {
    0: false,
    1: false,
  }
})

const endHalfYear = (G, ctx) => ({...G,
  halfYear: G.halfYear+1,
  lighthouse: lighthouseReset(G.lighthouse),
})

const lighthouseReset = (lighthouse) => ({
  used: false,
  // if lighthouse was not used, swap the owner
  owner: (lighthouse.used) ? lighthouse.owner : -(lighthouse.owner-1),
})

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
    pass(G, ctx) {
      const monthSpace = G.workerSpaces[ctx.phase]
      if(monthSpace === undefined || monthSpace[0] !== +ctx.currentPlayer) {
        return {...G,
          passed: {
            ...G.passed,
            [ctx.currentPlayer]: true,
          }
        }
      }
    }
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
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder
      },
      {
        name: 'august',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'september',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'october',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'november',
        allowedMoves: ['pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: endHalfYear,
        turnOrder: inventoryingTurnOrder
      },
      {
        name: 'december',
        allowedMoves: ['pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: (G, ctx) => ({...G,
          workerSpaces: winterActionsReset(+G.lighthouse.owner),
          passed: {
            0: false,
            1: false,
          },
        }),
        onPhaseEnd: (G, ctx) => G,
        turnOrder: preparationsTurnOrder,
      },
      {
        name: 'january',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'february',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'march',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'april',
        allowedMoves: ['action', 'pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: (G, ctx) => G,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'may',
        allowedMoves: ['pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        onPhaseEnd: endHalfYear,
        turnOrder: inventoryingTurnOrder,
      },
      {
        name: 'june',
        allowedMoves: ['pass'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: (G, ctx) => ({...G,
          workerSpaces: summerActionsReset(+G.lighthouse.owner),
          passed: {
            0: false,
            1: false,
          },
        }),
        onPhaseEnd: (G, ctx) => G,
        turnOrder: preparationsTurnOrder
      },
    ]
  },


});

export default game;
