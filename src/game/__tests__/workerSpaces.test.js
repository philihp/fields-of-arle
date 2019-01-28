import { summerActionsReset, winterActionsReset } from '../workerSpaces'

describe('summerActionsReset', () => {
  describe('one player', () => {
    it('resets winter months to nil array', () => {
      const spaces = summerActionsReset(1, 0)
      expect(spaces.january).toEqual([])
      expect(spaces.february).toEqual([])
      expect(spaces.march).toEqual([])
      expect(spaces.april).toEqual([])
    })
    it('resets summer months to array with numbers', () => {
      const spaces = summerActionsReset(1, 0)
      expect(spaces.july).toEqual([0])
      expect(spaces.august).toEqual([0])
      expect(spaces.september).toEqual([0])
      expect(spaces.october).toEqual([0])
    })
  })
  describe('two player', () => {
    it('resets winter months to nil array', () => {
      const spaces = summerActionsReset(2, 0)
      expect(spaces.january).toEqual([])
      expect(spaces.february).toEqual([])
      expect(spaces.march).toEqual([])
      expect(spaces.april).toEqual([])
    })
    it('resets summer months to array with numbers', () => {
      const spaces = summerActionsReset(2, 0)
      expect(spaces.july).toEqual([0, 1])
      expect(spaces.august).toEqual([0, 1])
      expect(spaces.september).toEqual([0, 1])
      expect(spaces.october).toEqual([0, 1])
    })
    it('resets the player array with correct ordering', () => {
      const spaces = summerActionsReset(2, 1)
      expect(spaces.july).toEqual([1, 0])
      expect(spaces.august).toEqual([1, 0])
      expect(spaces.september).toEqual([1, 0])
      expect(spaces.october).toEqual([1, 0])
    })
  })
})

describe('winterActionsReset', () => {
  describe('one player', () => {
    it('resets winter months to nil array', () => {
      const spaces = winterActionsReset(1, 0)
      expect(spaces.july).toEqual([])
      expect(spaces.august).toEqual([])
      expect(spaces.september).toEqual([])
      expect(spaces.october).toEqual([])
    })
    it('resets summer months to array with numbers', () => {
      const spaces = winterActionsReset(1, 0)
      expect(spaces.january).toEqual([0])
      expect(spaces.february).toEqual([0])
      expect(spaces.march).toEqual([0])
      expect(spaces.april).toEqual([0])
    })
  })
  describe('two player', () => {
    it('resets winter months to nil array', () => {
      const spaces = winterActionsReset(2, 0)
      expect(spaces.july).toEqual([])
      expect(spaces.august).toEqual([])
      expect(spaces.september).toEqual([])
      expect(spaces.october).toEqual([])
    })
    it('resets summer months to array with numbers', () => {
      const spaces = winterActionsReset(2, 0)
      expect(spaces.january).toEqual([0, 1])
      expect(spaces.february).toEqual([0, 1])
      expect(spaces.march).toEqual([0, 1])
      expect(spaces.april).toEqual([0, 1])
    })
    it('resets the player array with correct ordering', () => {
      const spaces = winterActionsReset(2, 1)
      expect(spaces.january).toEqual([1, 0])
      expect(spaces.february).toEqual([1, 0])
      expect(spaces.march).toEqual([1, 0])
      expect(spaces.april).toEqual([1, 0])
    })
  })
})
