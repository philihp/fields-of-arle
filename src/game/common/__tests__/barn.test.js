import {
  firstOpenSmallSpace,
  firstOpenLargeSpace,
  openBarnSpace,
} from '../barn'

describe('barn', () => {
  const barnWithOpen = slot => ({
    small1: { type: 'tractor' },
    small2: { type: 'tractor' },
    small3: { type: 'tractor' },
    small4: { type: 'tractor' },
    large1: { type: 'tractor' },
    large2: { type: 'tractor' },
    large3: { type: 'tractor' },
    [slot]: null,
  })

  describe('firstOpenSmallSpace', () => {
    it('returns undefined if nothing open', () => {
      const barn = barnWithOpen()
      expect(firstOpenSmallSpace(barn)).toBeUndefined()
    })
    it('returns small1 if the slot is open', () => {
      const barn = barnWithOpen('small1')
      expect(firstOpenSmallSpace(barn)).toBe('small1')
    })
    it('returns small2 if the slot is open', () => {
      const barn = barnWithOpen('small2')
      expect(firstOpenSmallSpace(barn)).toBe('small2')
    })
    it('returns small3 if the slot is open', () => {
      const barn = barnWithOpen('small3')
      expect(firstOpenSmallSpace(barn)).toBe('small3')
    })
    it('returns small4 if the slot is open', () => {
      const barn = barnWithOpen('small4')
      expect(firstOpenSmallSpace(barn)).toBe('small4')
    })
    it('returns large3 if the slot is open', () => {
      const barn = barnWithOpen('large3')
      expect(firstOpenSmallSpace(barn)).toBe('large3')
    })
    it('prefers a smalls lot over the large one', () => {
      const barn = {
        small1: { type: 'tractor' },
        small2: null,
        small3: { type: 'tractor' },
        small4: { type: 'tractor' },
        large1: { type: 'tractor' },
        large2: { type: 'tractor' },
        large3: null,
      }
      expect(firstOpenSmallSpace(barn)).toBe('small2')
    })
  })

  describe('firstOpenLargeSpace', () => {
    it('returns undefined if nothing open', () => {
      const barn = barnWithOpen()
      expect(firstOpenLargeSpace(barn)).toBeUndefined()
    })
    it('returns large1 if the slot is open', () => {
      const barn = barnWithOpen('large1')
      expect(firstOpenLargeSpace(barn)).toBe('large1')
    })
    it('returns large2 if the slot is open', () => {
      const barn = barnWithOpen('large2')
      expect(firstOpenLargeSpace(barn)).toBe('large2')
    })
    it('returns large3 if the slot is open', () => {
      const barn = barnWithOpen('large3')
      expect(firstOpenLargeSpace(barn)).toBe('large3')
    })
  })

  describe('openBarnSpace', () => {
    it('returns undefined if not a real vehicle', () => {
      const barn = barnWithOpen()
      expect(openBarnSpace(barn, 'tractor')).toBeUndefined()
    })
    it('returns small3 for a wagon', () => {
      const barn = barnWithOpen('small3')
      expect(openBarnSpace(barn, 'wagon')).toBe('small3')
    })
    it('returns large1 for a droshky', () => {
      const barn = barnWithOpen('large1')
      expect(openBarnSpace(barn, 'droshky')).toBe('large1')
    })
  })
})
