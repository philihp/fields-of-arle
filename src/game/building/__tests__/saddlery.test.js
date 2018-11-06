import saddlery from '../saddlery'

const stateWith = () => ({
  G: {
    players: {
      0: {
        land: [
          [
            {
              type: 'doubleStall',
              contents: ['horse', 'horse', 'sheep', 'sheep', 'horse'],
            },
          ],
        ],
        dikes: [[{ type: 'dike', contents: ['horse'] }]],
      },
    },
    toolSpaces: {
      fleshingBeams: [0, 0],
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('saddlery', () => {
  it('does not mutate state', () => {
    const input = stateWith()
    const output = saddlery(input)
    expect(output).not.toBe(input)
  })
  it('adds a fleshing beam to the players tools', () => {
    const input = stateWith()
    const output = saddlery(input)
    expect(output.G.toolSpaces.fleshingBeams).toEqual([1, 0])
  })
  it('adds lets the player cut peat based on the number of horses', () => {
    const input = stateWith()
    const output = saddlery(input)
    expect(output.G.action).toBe('peatCutter')
    expect(output.G.times).toBe(4)
  })
})
