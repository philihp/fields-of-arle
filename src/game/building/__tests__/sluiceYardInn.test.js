import sluiceYardInn from '../sluiceYardInn'

const stateWith = numberOfPriorAdvances => ({
  G: {
    players: {
      0: {
        inventory: [],
      },
    },
    toolSpaces: {
      fishTraps: [numberOfPriorAdvances, 0],
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('sluiceYardInn', () => {
  it('advances the fish traps twice', () => {
    const input = stateWith(0)
    const output = sluiceYardInn(input)
    expect(output.G.toolSpaces.fishTraps).toEqual([2, 0])
  })

  it('gives wood per fishTraps', () => {
    const input = stateWith(0)
    const output = sluiceYardInn(input)
    expect(output.G.players['0'].inventory).toEqual([
      'wood',
      'wood',
      'wood',
      'wood',
    ])
  })

  it('des not advance past limit', () => {
    const input = stateWith(3)
    const output = sluiceYardInn(input)
    expect(output.G.toolSpaces.fishTraps).toEqual([4, 0])
  })

  it('gives wood per fishTraps', () => {
    const input = stateWith(3)
    const output = sluiceYardInn(input)
    expect(output.G.players['0'].inventory).toEqual([
      'wood',
      'wood',
      'wood',
      'wood',
      'wood',
      'wood',
    ])
  })
})
