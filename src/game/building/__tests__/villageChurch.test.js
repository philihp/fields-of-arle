import villageChurch from '../villageChurch'
import { initialState } from '../../index'

const stateWith = () => ({
  G: initialState(2),
  ctx: {
    currentPlayer: '0',
  },
})

describe('villageChurch', () => {
  it('takes a carriage from supply', () => {
    const input = stateWith()
    const output = villageChurch(input)
    expect(output.G.supplies.carriageDroshky).toBe(
      input.G.supplies.carriageDroshky - 1
    )
  })
  it('gives a carriage to player', () => {
    const input = stateWith()
    const output = villageChurch(input)
    expect(output.G.players['0'].barn.large1).toEqual({
      contents: [null, null, null],
      type: 'carriage',
    })
  })
})
