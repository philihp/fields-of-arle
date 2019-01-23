import { workshopTurnOrder, resetPassedIfWorkshops } from '../workshop'
import { initialState } from '../../index'

const stateWith = (playerCount, currentPlayer) => ({
  G: initialState(playerCount),
  ctx: {
    currentPlayer: `${currentPlayer}`,
  },
})

describe('resetPassedIfWorkshops', () => {
  describe('1 player', () => {
    it('used workshops should be empty', () => {
      const state = stateWith(1, 0)
      const output = resetPassedIfWorkshops(state.G, state.ctx)
      expect(output.usedWorkshops).toHaveLength(0)
    })
    it('player without has passed', () => {
      const state = stateWith(1, 0)
      const output = resetPassedIfWorkshops(state.G, state.ctx)
      expect(output.passed['0']).toBeTruthy()
    })
    it('player with workshop has not passed', () => {
      const state = stateWith(1, 0)
      const G = {
        ...state.G,
        players: {
          ...state.G.players,
          0: {
            ...state.G.players['0'],
            land: [[{ type: 'workshop', contents: [] }]],
          },
        },
      }
      const output = resetPassedIfWorkshops(G, state.ctx)
      expect(output.passed['0']).toBeFalsy()
    })
  })
  describe('2 player', () => {
    it('used workshops should be empty', () => {
      const state = stateWith(2, 0)
      const output = resetPassedIfWorkshops(state.G, state.ctx)
      expect(output.usedWorkshops).toHaveLength(0)
    })
    it('both players have passed', () => {
      const state = stateWith(2, 0)
      const output = resetPassedIfWorkshops(state.G, state.ctx)
      expect(output.passed['0']).toBeTruthy()
      expect(output.passed['1']).toBeTruthy()
    })
    it('only player 0 has not passed', () => {
      const state = stateWith(2, 0)
      const G = {
        ...state.G,
        players: {
          ...state.G.players,
          0: {
            ...state.G.players['0'],
            land: [[{ type: 'novicesHut', contents: [] }]],
          },
        },
      }
      const output = resetPassedIfWorkshops(G, state.ctx)
      expect(output.passed['0']).toBeFalsy()
      expect(output.passed['1']).toBeTruthy()
    })
    it('only player 1 has not passed', () => {
      const state = stateWith(2, 0)
      const G = {
        ...state.G,
        players: {
          ...state.G.players,
          1: {
            ...state.G.players['1'],
            land: [[{ type: 'plowMakersWorkshop', contents: [] }]],
          },
        },
      }
      const output = resetPassedIfWorkshops(G, state.ctx)
      expect(output.passed['0']).toBeTruthy()
      expect(output.passed['1']).toBeFalsy()
    })
    it('both players have not passed', () => {
      const state = stateWith(2, 0)
      const G = {
        ...state.G,
        players: {
          ...state.G.players,
          0: {
            ...state.G.players['0'],
            land: [[{ type: 'farmersHouse', contents: [] }]],
          },
          1: {
            ...state.G.players['1'],
            land: [[{ type: 'workshop', contents: [] }]],
          },
        },
      }
      const output = resetPassedIfWorkshops(G, state.ctx)
      expect(output.passed['0']).toBeFalsy()
      expect(output.passed['1']).toBeFalsy()
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
