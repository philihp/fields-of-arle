import { flip } from '../tokens'

describe('flip', () => {
  it('turns woolen into winterWear', () => {
    expect(flip('woolen')).toBe('winterWear')
  })

  it('turns winterWear into winterWear', () => {
    expect(flip('winterWear')).toBe('winterWear')
  })

  it('does not mess with unknown tokens', () => {
    expect(flip('fhwdgads')).toBe('fhwdgads')
  })
})
