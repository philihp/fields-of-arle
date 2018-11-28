import berumCastle from '../berumCastle'
import { initialState } from '../../index'

const stateWith = () => ({
  G: initialState(2),
  ctx: {
    currentPlayer: '0',
  },
})

describe('berumCastle', () => {
  it('advances the ovens once', () => {
    const input = stateWith()
    const output = berumCastle(input)
    expect(output.G.toolSpaces.ovens).toEqual([1, 0])
  })

  it('advances the weavingLooms once', () => {
    const input = stateWith()
    const output = berumCastle(input)
    expect(output.G.toolSpaces.weavingLooms).toEqual([1, 0])
  })

  it('gives a warden action', () => {
    const input = stateWith(0)
    const output = berumCastle(input)
    expect(output.G.action).toBe('warden')
  })
})
