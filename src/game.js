import action from './game/moves/action'
import arrange from './game/moves/arrange'
import option from './game/moves/option'
import pass from './game/moves/pass'
import returnAction from './game/moves/return'
import load from './game/moves/load'
import workshop from './game/moves/workshop'
import { onNovemberBegin, onMayBegin, onRoundEnd } from './game/endOfRound'

import {
  smallHouses,
  minorCraftBuildings,
  majorCraftBuildings,
  innTiles,
  largeBuildings,
} from './game/building/type'
import { resetPassedIfWorkshops } from './game/building/workshop'
import { initialState } from './game/'
import { winterActionsReset, summerActionsReset } from './game/workerSpaces'
import {
  allPlayersPassed,
  resetPassed,
} from './game/turnOrders'

const game = {
  setup: ctx => ({
    ...initialState(ctx.numPlayers),
    buildings: [
      ...ctx.random.Shuffle(smallHouses).slice(0, 4),
      //...smallHouses.slice(0, 4),

      ...ctx.random.Shuffle(minorCraftBuildings).slice(0, 2),
      //minorCraftBuildings[2],
      //minorCraftBuildings[4],

      ...majorCraftBuildings,
      ...ctx.random.Shuffle(innTiles).slice(0, 3),
      //...innTiles.slice(0, 3),

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

  phases: {
    july: {
      start: true,
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'august',
    },
    august: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'september',
    },
    september: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'october',
    },
    october: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      next: 'preNovember',
    },
    preNovember: {
      moves: { pass, workshop, option, load },
      endIf: allPlayersPassed,
      onBegin: resetPassedIfWorkshops,
      next: 'november',
    },
    november: {
      moves: {},
      endIf: allPlayersPassed,
      onBegin: onNovemberBegin,
      onEnd: onRoundEnd,
      next: 'december',
    },
    december: {
      endIf: () => true,
      onBegin: (G, ctx) => ({
        ...G,
        workerSpaces: winterActionsReset(ctx.numPlayers, ctx.currentPlayer),
      }),
      next: 'january',
    },
    january: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      next: 'february',
    },
    february: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      next: 'march',
    },
    march: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      next: 'april',
    },
    april: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onBegin: resetPassed,
      next: 'may',
    },
    may: {
      moves: {},
      endIf: allPlayersPassed,
      onBegin: onMayBegin,
      onEnd: onRoundEnd,
      next: 'june',
    },
    june: {
      endIf: () => true,
      onBegin: (G, ctx) => ({
        ...G,
        workerSpaces: summerActionsReset(ctx.numPlayers, ctx.currentPlayer),
      }),
      next: 'july',
    },
  },

  turn: {
  }
}

export default game
