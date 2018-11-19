import bakehouse from '../bakehouse'
import { initialState } from '../../index'

const stateWith = () => ({
  G: initialState,
  ctx: {
    currentPlayer: '0',
  },
})

describe('bakehouse', () => {
  it('gives a bakehouse action', () => {
    const input = stateWith(0)
    const output = bakehouse(input)
    expect(output.G.action).toBe('bakehouse')
  })
})
