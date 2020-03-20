import action from './game/moves/action'
import arrange from './game/moves/arrange'
import option from './game/moves/option'
import pass from './game/moves/pass'
import returnAction from './game/moves/return'
import load from './game/moves/load'
import workshop from './game/moves/workshop'
import { onNovemberBegin, onMayBegin, onSpringEnd, onAutumnEnd } from './game/endOfRound'

import {
  smallHouses,
  minorCraftBuildings,
  majorCraftBuildings,
  innTiles,
  largeBuildings,
} from './game/building/type'
import { resetPassedIfWorkshops } from './game/building/workshop'
import { initialState } from './game/'
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
      onEnd: resetPassedIfWorkshops,
      next: 'preNovember',
    },
    preNovember: {
      moves: { pass, workshop, option, load },
      endIf: allPlayersPassed,
      onEnd: onNovemberBegin,
      next: 'november',
    },
    november: {
      moves: {},
      endIf: allPlayersPassed,
      onEnd: onAutumnEnd,
      next: 'december',
    },
    december: {
      endIf: () => true,
      next: 'january',
    },
    january: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'february',
    },
    february: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'march',
    },
    march: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: resetPassed,
      next: 'april',
    },
    april: {
      moves: { action, option, pass, arrange, return: returnAction, load },
      endIf: allPlayersPassed,
      onEnd: onMayBegin,
      next: 'may',
    },
    may: {
      moves: {},
      endIf: allPlayersPassed,
      onEnd: onSpringEnd,
      next: 'june',
    },
    june: {
      endIf: () => true,
      next: 'july',
    },
  },

  turn: {
  }
}

export default game
