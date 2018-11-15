import smokehouse from '../smokehouse'

const stateWith = numberOfPriorAdvances => ({
  G: {
    toolSpaces: {
      fishTraps: [numberOfPriorAdvances, 0],
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('smokehouse', () => {
  it('cuts peat per fishTraps', () => {
    const input = stateWith(0)
    const output = smokehouse(input)
    expect(output.G.action).toBe('peatCutter')
    expect(output.G.times).toBe(2)
  })

  it('cuts peat per advanced fishTraps', () => {
    const input = stateWith(2)
    const output = smokehouse(input)
    expect(output.G.action).toBe('peatCutter')
    expect(output.G.times).toBe(4)
  })
})
