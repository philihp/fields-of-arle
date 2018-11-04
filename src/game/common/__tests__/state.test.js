import { initialState } from '../../index'
import { toolBump } from '../state'

describe('state', () => {
  const ctx = { currentPlayer: '0' }
  // let G
  // beforeEach(() => {
  //   G = initialState
  // })

  describe('toolBump', () => {
    it('bumps a tool', () => {
      const G = initialState
      expect(G.toolSpaces.fishTraps).toEqual([0, 0])
      const G2 = toolBump('fishTraps')({ G, ctx }).G
      expect(G2.toolSpaces.fishTraps).toEqual([1, 0])
      expect(G).not.toBe(G2)
      expect(G.toolSpaces).not.toBe(G2.toolSpaces)
      expect(G.toolSpaces.fishTraps).not.toBe(G2.toolSpaces.fishTraps)
    })
    it('repeatedly bumps', () => {
      const G = initialState
      expect(G.toolSpaces.fishTraps).toEqual([0, 0])
      const G2 = toolBump('fishTraps')({ G, ctx }).G
      expect(G2.toolSpaces.fishTraps).toEqual([1, 0])
      const G3 = toolBump('fishTraps')({ G: G2, ctx }).G
      expect(G3.toolSpaces.fishTraps).toEqual([2, 0])
    })
    it('bumps a tool', () => {
      const G = initialState
      const G2 = toolBump('fishTraps')({ G: G, ctx }).G
      const G3 = toolBump('fishTraps')({ G: G2, ctx }).G
      const G4 = toolBump('fishTraps')({ G: G3, ctx }).G
      const G5 = toolBump('fishTraps')({ G: G4, ctx }).G
      const G6 = toolBump('fishTraps')({ G: G5, ctx }).G
      expect(G).not.toBe(G2)
      expect(G2).not.toBe(G3)
      expect(G3).not.toBe(G4)
      expect(G4).not.toBe(G5)
      expect(G5.toolSpaces.fishTraps).toEqual(G6.toolSpaces.fishTraps)
      // would be nice if it didn't even mutate though
      // expect(G5).toBe(G6)
    })
  })
})
