import smithy from '../smithy'
import { initialState } from '../../index'

const stateWith = () => ({
  G: initialState,
  ctx: {
    currentPlayer: '0',
  },
})

describe('smithy', () => {
  it('gives a smithy action', () => {
    const input = stateWith(0)
    const output = smithy(input)
    expect(output.G.action).toBe('smithy')
  })
})
