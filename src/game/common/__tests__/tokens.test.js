import { flip } from '../tokens'

describe('flip', () => {
  it('turns woolen into winterWare', () => {
    expect(flip('woolen')).toBe('winterWare')
  })

  it('turns winterWare into winterWare', () => {
    expect(flip('winterWare')).toBe('winterWare')
  })

  it('does not mess with unknown tokens', () => {
    expect(flip('fhwdgads')).toBe('fhwdgads')
  })
})
