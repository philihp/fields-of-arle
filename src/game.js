import { Game } from 'boardgame.io/core'
import action from './game/moves/action'
import arrange from './game/moves/arrange'
import option from './game/moves/option'
import pass from './game/moves/pass'
import returnAction from './game/moves/return'
import workshop from './game/moves/workshop'
import {
  resetPassedIfWorkshops,
  workshopTurnOrder,
} from './game/building/workshop'
import { onNovemberBegin, onMayBegin, onRoundEnd } from './game/endOfRound'

// import { pickWorker } from './game/common/'
import {
  smallHouses,
  minorCraftBuildings,
  majorCraftBuildings,
  innTiles,
  largeBuildings,
} from './game/building/type'
import { initialState } from './game/'
import { winterActionsReset, summerActionsReset } from './game/workerSpaces'

// const summerActions = ['woodcutter','summerMaster','summerCarpenter','laborer','builder','warden']
// const winterActions = ['woodTrader','winterMaster','winterCarpenter','wainwright','dikeWarden','laborer']

const inventoryingTurnOrder = {
  first: (G, ctx) => +ctx.currentPlayer,
  next: (G, ctx) => -(+ctx.currentPlayer - 1),
}

const preparationsTurnOrder = {
  // this feels weird. it feels like it should just be the lighthouse owner...
  // but something is calling next, which flips the turn back.
  first: G => -(+G.lighthouse.owner - 1),
  next: (G, ctx) => -(+ctx.currentPlayer - 1),
}

const actionTurnOrder = {
  first: (G, ctx) => G.workerSpaces[ctx.phase][0],
  next: (G, ctx) => G.workerSpaces[ctx.phase][0],
}

const allPlayersPassed = (G, ctx) => Object.values(G.passed).every(b => b)

const resetPassed = (G, ctx) => ({
  ...G,
  passed: {
    0: false,
    1: false,
  },
})

const game = Game({
  setup: ctx => ({
    ...initialState,
    buildings: [
      ...ctx.random.Shuffle(smallHouses).slice(0, 4),
      ...ctx.random.Shuffle(minorCraftBuildings).slice(0, 2),
      ...majorCraftBuildings,
      ...ctx.random.Shuffle(innTiles).slice(0, 3),
      ...largeBuildings,
    ],
  }),

  moves: {
    action,
    option,
    pass,
    arrange,
    return: returnAction,
    workshop,
  },

  flow: {
    endGameIf: (G, ctx) => {
      if (G.halfYear === 9 && ctx.phase === 'november') {
        return 'ended due to rounds'
      }
    },
    endTurnIf: (G, ctx) => G.passed[ctx.currentPlayer],
    phases: [
      {
        name: 'july',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'august',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'september',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'october',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'preNovember',
        allowedMoves: ['pass', 'workshop', 'option'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassedIfWorkshops,
        turnOrder: workshopTurnOrder,
      },
      {
        name: 'november',
        allowedMoves: [],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: onNovemberBegin,
        onPhaseEnd: onRoundEnd,
        turnOrder: inventoryingTurnOrder,
      },
      {
        name: 'december',
        endPhaseIf: () => true,
        onPhaseBegin: (G, ctx) => ({
          ...G,
          workerSpaces: winterActionsReset(+G.lighthouse.owner),
        }),
        turnOrder: preparationsTurnOrder,
      },
      {
        name: 'january',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'february',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'march',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'april',
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
      },
      {
        name: 'may',
        allowedMoves: [],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: onMayBegin,
        onPhaseEnd: onRoundEnd,
        turnOrder: inventoryingTurnOrder,
      },
      {
        name: 'june',
        endPhaseIf: () => true,
        onPhaseBegin: (G, ctx) => ({
          ...G,
          workerSpaces: summerActionsReset(+G.lighthouse.owner),
        }),
        turnOrder: preparationsTurnOrder,
      },
    ],
  },
})

export default game
