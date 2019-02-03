import { buildDikes, arrangeItem, place } from '../land'
import { initialState } from '../../index'

describe('land', () => {
  const state = {
    G: initialState(2),
    ctx: {
      currentPlayer: 0,
    },
  }

  describe('buildDikes', () => {
    it('can build dikes once', () => {
      const result = buildDikes(1)(state)
      expect(result.G.players['0'].dikes[3][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[3][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][0].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[1][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][2].type).toBe('empty')
    })
    it('can build dikes twice', () => {
      const result = buildDikes(2)(state)
      expect(result.G.players['0'].dikes[3][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][0].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[2][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[1][0].type).toBe('dike')
      expect(result.G.players['0'].dikes[1][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[0][2].type).toBe('empty')
    })
    it('can build dikes seven times', () => {
      const result = buildDikes(7)(state)
      expect(result.G.players['0'].dikes[3][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[1][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][0].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][2].type).toBe('dike')
    })
    it("building after the seventh doesn't do anything", () => {
      const stateAfterSeven = buildDikes(7)(state)
      const result = buildDikes(1)(stateAfterSeven)
      expect(result.G.players['0'].dikes[3][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[3][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][1].type).toBe('empty')
      expect(result.G.players['0'].dikes[2][2].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][0].type).toBe('empty')
      expect(result.G.players['0'].dikes[1][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[1][2].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][0].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][1].type).toBe('dike')
      expect(result.G.players['0'].dikes[0][2].type).toBe('dike')
    })
  })

  describe('arrangeItem', () => {
    it('moves a horse', () => {
      const result = arrangeItem(state, {
        src: { type: 'land', row: 4, col: 0, i: 0 },
        dst: { type: 'dikes', row: 3, col: 0, i: 0 },
      })
      expect(result.players['0'].dikes[3][0].contents[0]).toBe('horse')
      expect(result.players['0'].land[4][0].contents).toHaveLength(0)
    })
  })

  describe('place', () => {
    it('places some weird type', () => {
      expect(
        place('castle')({
          ...state,
          args: [{ row: 3, col: 0 }],
        }).G.players['0'].land[3][0].type
      ).toBe('castle')
    })
    it('sends all the animals that were there to the tokens', () => {
      const GWithHorse = arrangeItem(state, {
        src: { type: 'land', row: 4, col: 0, i: 0 },
        dst: { type: 'land', row: 3, col: 0, i: 0 },
      })
      const stateAfterBuild = place('castle')({
        ...state,
        G: GWithHorse,
        args: [{ row: 3, col: 0 }],
      })
      expect(stateAfterBuild.G.players['0'].land[3][0].type).toBe('castle')
      expect(stateAfterBuild.G.players['0'].land[3][0].contents).toEqual([])
      expect(stateAfterBuild.G.players['0'].tokens[0]).toBe('horse')
    })
    it('does nothing if occupied', () => {
      expect(
        place('castle')({
          ...state,
          args: [{ row: 4, col: 0 }],
        }).G
      ).toBe(state.G)
    })
    it('does nothing if flooded', () => {
      expect(
        place('castle')({
          ...state,
          args: [{ row: 0, col: 0 }],
        }).G
      ).toBe(state.G)
    })
  })
})
