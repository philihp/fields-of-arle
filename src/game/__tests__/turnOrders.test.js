import {
  inventoryingTurnOrder,
  preparationsTurnOrder,
  actionTurnOrder,
  allPlayersPassed,
  resetPassed,
  workshopTurnOrder,
} from '../turnOrders'

import { initialState } from '../index'

const stateWith = (playerCount, currentPlayer) => ({
  G: initialState(playerCount),
  ctx: {
    currentPlayer: `${currentPlayer}`,
  },
})

describe('inventoryingTurnOrder', () => {
  describe('one players', () => {
    const state = {
      G: {},
      ctx: {
        numPlayers: 1,
        currentPlayer: '0',
      },
    }
    it('current player as first', () => {
      expect(inventoryingTurnOrder.first(state.G, state.ctx)).toBe(0)
    })
    it('other player as next', () => {
      expect(inventoryingTurnOrder.next(state.G, state.ctx)).toBe(0)
    })
  })
  describe('two players', () => {
    describe('current player 0', () => {
      const state = {
        G: {},
        ctx: {
          numPlayers: 2,
          currentPlayer: '0',
        },
      }
      it('current player as first', () => {
        expect(inventoryingTurnOrder.first(state.G, state.ctx)).toBe(0)
      })
      it('other player as next', () => {
        expect(inventoryingTurnOrder.next(state.G, state.ctx)).toBe(1)
      })
    })
    describe('current player 1', () => {
      const state = {
        G: {},
        ctx: {
          numPlayers: 2,
          currentPlayer: '1',
        },
      }
      it('current player as first', () => {
        expect(inventoryingTurnOrder.first(state.G, state.ctx)).toBe(1)
      })
      it('other player as next', () => {
        expect(inventoryingTurnOrder.next(state.G, state.ctx)).toBe(0)
      })
    })
  })
})

describe('preparationsTurnOrder', () => {
  describe('one players', () => {
    const state = {
      G: {
        lighthouse: { owner: 0 },
      },
      ctx: {
        numPlayers: 1,
        currentPlayer: '0',
      },
    }
    it('current player as first', () => {
      expect(preparationsTurnOrder.first(state.G, state.ctx)).toBe(0)
    })
    it('other player as next', () => {
      expect(preparationsTurnOrder.next(state.G, state.ctx)).toBe(0)
    })
  })
  describe('two players', () => {
    describe('current player 0', () => {
      const state = {
        G: {
          lighthouse: { owner: 0 },
        },
        ctx: {
          numPlayers: 2,
          currentPlayer: '0',
        },
      }
      it('current player as first', () => {
        expect(preparationsTurnOrder.first(state.G, state.ctx)).toBe(1)
      })
      it('current player as next', () => {
        expect(preparationsTurnOrder.next(state.G, state.ctx)).toBe(1)
      })
    })
    describe('current player 1', () => {
      const state = {
        G: {
          lighthouse: { owner: 0 },
        },
        ctx: {
          numPlayers: 2,
          currentPlayer: '1',
        },
      }
      it('current player as first', () => {
        expect(preparationsTurnOrder.first(state.G, state.ctx)).toBe(1)
      })
      it('other player as next', () => {
        expect(preparationsTurnOrder.next(state.G, state.ctx)).toBe(0)
      })
    })
  })
})

describe('actionTurnOrder', () => {
  describe('one players', () => {
    const state = {
      G: {
        workerSpaces: {
          september: [0],
        },
      },
      ctx: {
        phase: 'september',
        numPlayers: 1,
      },
    }
    it('current player as first', () => {
      expect(actionTurnOrder.first(state.G, state.ctx)).toBe(0)
    })
    it('other player as next', () => {
      expect(actionTurnOrder.next(state.G, state.ctx)).toBe(0)
    })
  })
  describe('two players', () => {
    describe('current player 0', () => {
      const state = {
        G: {
          workerSpaces: {
            september: [0, 1],
          },
        },
        ctx: {
          phase: 'september',
          numPlayers: 2,
        },
      }
      it('current player as first', () => {
        expect(actionTurnOrder.first(state.G, state.ctx)).toBe(0)
      })
      it('current player as next', () => {
        expect(actionTurnOrder.next(state.G, state.ctx)).toBe(0)
      })
    })
    describe('current player 1', () => {
      const state = {
        G: {
          workerSpaces: {
            september: [1, 0],
          },
        },
        ctx: {
          phase: 'september',
          numPlayers: 2,
        },
      }
      it('current player as first', () => {
        expect(actionTurnOrder.first(state.G, state.ctx)).toBe(1)
      })
      it('other player as next', () => {
        expect(actionTurnOrder.next(state.G, state.ctx)).toBe(1)
      })
    })
  })
})

describe('workshopTurnOrder', () => {
  describe('1 player', () => {
    it('gives first player', () => {
      const state = stateWith(1, 0)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(0)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(1)
    })
  })
  describe('2 player', () => {
    it('gives first player', () => {
      const state = stateWith(2, 0)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(0)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(1)
    })
    it('gives second player', () => {
      const state = stateWith(2, 1)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(1)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(0)
    })
    it('player zero has a workshop', () => {
      const baseState = stateWith(2, 0)
      const state = {
        ...baseState,
        G: {
          ...baseState.G,
          players: {
            ...baseState.G.players,
            0: {
              ...baseState.G.players['0'],
              land: [[{ contents: [], type: 'plowMakersWorkshop' }]],
            },
          },
        },
      }
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(0)
    })
    it('player one has a workshop', () => {
      const baseState = stateWith(2, 0)
      const state = {
        ...baseState,
        G: {
          ...baseState.G,
          players: {
            ...baseState.G.players,
            1: {
              ...baseState.G.players['1'],
              land: [[{ contents: [], type: 'plowMakersWorkshop' }]],
            },
          },
        },
      }
      // TODO: I think this is wrong... but i am drunk right now. fix later.
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(0)
    })
  })
  xdescribe('3 player', () => {
    it('gives first player', () => {
      const state = stateWith(3, 0)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(0)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(1)
    })
    it('gives second player', () => {
      const state = stateWith(3, 1)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(1)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(2)
    })
    it('gives third player', () => {
      const state = stateWith(3, 2)
      expect(workshopTurnOrder.first(state.G, state.ctx)).toBe(2)
      expect(workshopTurnOrder.next(state.G, state.ctx)).toBe(0)
    })
  })
})

describe('allPlayersPassed', () => {
  describe('one players', () => {
    it('is false when all false', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: false,
          },
        })
      ).toBeFalsy()
    })
    it('is true when all true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: true,
          },
        })
      ).toBeTruthy()
    })
  })
  describe('two players', () => {
    it('is false when all false', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: false,
            1: false,
          },
        })
      ).toBeFalsy()
    })
    it('is false when half true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: false,
            1: true,
          },
        })
      ).toBeFalsy()
    })
    it('is false when half true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: true,
            1: false,
          },
        })
      ).toBeFalsy()
    })
    it('is true when all true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: true,
            1: true,
          },
        })
      ).toBeTruthy()
    })
  })
  describe('three players', () => {
    it('is false when all false', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: false,
            1: false,
            2: false,
          },
        })
      ).toBeFalsy()
    })
    it('is false when half true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: false,
            1: true,
            2: false,
          },
        })
      ).toBeFalsy()
    })
    it('is false when half true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: true,
            1: false,
            2: false,
          },
        })
      ).toBeFalsy()
    })
    it('is true when all true', () => {
      expect(
        allPlayersPassed({
          passed: {
            0: true,
            1: true,
            2: true,
          },
        })
      ).toBeTruthy()
    })
  })
})

describe('resetPassed', () => {
  describe('one players', () => {
    it('sets all players to false', () => {
      const { passed } = resetPassed({}, { numPlayers: 1 })
      expect(passed).toEqual({ 0: false })
    })
  })
  describe('two players', () => {
    it('sets all players to false', () => {
      const { passed } = resetPassed({}, { numPlayers: 2 })
      expect(passed).toEqual({ 0: false, 1: false })
    })
  })
  describe('three players', () => {
    it('sets all players to false', () => {
      const { passed } = resetPassed({}, { numPlayers: 3 })
      expect(passed).toEqual({ 0: false, 1: false, 2: false })
    })
  })
})
