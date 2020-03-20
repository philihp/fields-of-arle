import action from './game/moves/action'
import arrange from './game/moves/arrange'
import option from './game/moves/option'
import pass from './game/moves/pass'
import returnAction from './game/moves/return'
import load from './game/moves/load'
import workshop from './game/moves/workshop'
import { resetPassedIfWorkshops } from './game/building/workshop'
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
  workshopTurnOrder,
  allPlayersPassed,
  resetPassed,
} from './game/turnOrders'

// const summerActions = ['woodcutter','summerMaster','summerCarpenter','laborer','builder','warden']
// const winterActions = ['woodTrader','winterMaster','winterCarpenter','wainwright','dikeWarden','laborer']

const game = {
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

  // endGameIf: (G, ctx) => {
  //   if (G.halfYear === 9 && ctx.phase === 'november') {
  //     return 'ended due to rounds'
  //   }
  // },
  // endTurnIf: (G, ctx) => G.passed[ctx.currentPlayer],
  phases: {
    july: {
      start: true,
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'august',
    },
    august: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'september',
    },
    september: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'october',
    },
    october: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'preNovember',
    },
    preNovember: {
      moves: { pass, workshop, option, load },
      endIf: allPlayersPassed,
      onBegin: resetPassedIfWorkshops,
      turnOrder: workshopTurnOrder,
      next: 'november',
    },
    november: {
      moves: {},
      endIf: allPlayersPassed,
      onBegin: onNovemberBegin,
      onEnd: onRoundEnd,
      turnOrder: inventoryingTurnOrder,
      next: 'december',
    },
    december: {
      endIf: () => true,
      onBegin: (G, ctx) => ({
        ...G,
        workerSpaces: winterActionsReset(ctx.numPlayers, ctx.currentPlayer),
      }),
      turnOrder: preparationsTurnOrder,
      next: 'january',
    },
    january: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'february',
    },
    february: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'march',
    },
    march: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'april',
    },
    april: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      turnOrder: actionTurnOrder,
      next: 'may',
    },
    may: {
      moves: {},
      endIf: allPlayersPassed,
      onBegin: onMayBegin,
      onEnd: onRoundEnd,
      turnOrder: inventoryingTurnOrder,
      next: 'june',
    },
    june: {
      endIf: () => true,
      onBegin: (G, ctx) => ({
        ...G,
        workerSpaces: summerActionsReset(ctx.numPlayers, ctx.currentPlayer),
      }),
      turnOrder: preparationsTurnOrder,
      next: 'july',
    },
  },

  turn: {
    endIf: (G, ctx) => {
      console.log({ passed: G.passed })
      console.log({ currentPlayer: ctx.currentPlayer })
      return G.passed[ctx.currentPlayer]
    },
  }
}

export default game
