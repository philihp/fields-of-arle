import { Game } from 'boardgame.io/core'
import action from './game/moves/action'
import arrange from './game/moves/arrange'
import option from './game/moves/option'
import pass from './game/moves/pass'
import returnAction from './game/moves/return'
import load from './game/moves/load'
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
import {
  inventoryingTurnOrder,
  preparationsTurnOrder,
  actionTurnOrder,
  allPlayersPassed,
  resetPassed,
} from './game/turnOrders'

// const summerActions = ['woodcutter','summerMaster','summerCarpenter','laborer','builder','warden']
// const winterActions = ['woodTrader','winterMaster','winterCarpenter','wainwright','dikeWarden','laborer']

const game = Game({
  setup: ctx => ({
    ...initialState(ctx.numPlayers),
    buildings: [
      // ...ctx.random.Shuffle(smallHouses).slice(0, 4),
      ...smallHouses.slice(0, 4),

      // ...ctx.random.Shuffle(minorCraftBuildings).slice(0, 2),
      minorCraftBuildings[2],
      minorCraftBuildings[4],

      ...majorCraftBuildings,
      // ...ctx.random.Shuffle(innTiles).slice(0, 3),
      ...innTiles.slice(0, 3),

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
    load,
  },

  flow: {
    endGameIf: (G, ctx) => {
      if (G.halfYear === 9 && ctx.phase === 'november') {
        return 'ended due to rounds'
      }
    },
    endTurnIf: (G, ctx) => G.passed[ctx.currentPlayer],
    startingPhase: 'july',
    phases: {
      july: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'august',
      },
      august: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'september',
      },
      september: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'october',
      },
      october: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'preNovember',
      },
      preNovember: {
        allowedMoves: ['pass', 'workshop', 'option', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassedIfWorkshops,
        turnOrder: workshopTurnOrder,
        next: 'november',
      },
      november: {
        allowedMoves: ['slaughter'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: onNovemberBegin,
        onPhaseEnd: onRoundEnd,
        turnOrder: inventoryingTurnOrder,
        next: 'december',
      },
      december: {
        endPhaseIf: () => true,
        onPhaseBegin: (G, ctx) => ({
          ...G,
          workerSpaces: winterActionsReset(+G.lighthouse.owner),
        }),
        turnOrder: preparationsTurnOrder,
        next: 'january',
      },
      january: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'february',
      },
      february: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'march',
      },
      march: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'april',
      },
      april: {
        allowedMoves: ['action', 'option', 'pass', 'arrange', 'return', 'load'],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: resetPassed,
        turnOrder: actionTurnOrder,
        next: 'may',
      },
      may: {
        allowedMoves: [],
        endPhaseIf: allPlayersPassed,
        onPhaseBegin: onMayBegin,
        onPhaseEnd: onRoundEnd,
        turnOrder: inventoryingTurnOrder,
        next: 'june',
      },
      june: {
        endPhaseIf: () => true,
        onPhaseBegin: (G, ctx) => ({
          ...G,
          workerSpaces: summerActionsReset(+G.lighthouse.owner),
        }),
        turnOrder: preparationsTurnOrder,
        next: 'july',
      },
    },
  },
})

export default game
