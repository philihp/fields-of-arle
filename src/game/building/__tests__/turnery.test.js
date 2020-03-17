import turnery from '../turnery'

const stateWith = (type = 'forest') => ({
  G: {
    players: {
      0: {
        inventory: [],
        land: [
          [
            { type, contents: [] },
            { type, contents: [] },
          ],
          [
            { type, contents: [] },
            { type, contents: [] },
          ],
        ],
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('turnery', () => {
  it('does not mutate state', () => {
    const input = stateWith('empty')
    const output = turnery(input)
    expect(output).toBe(input)
  })
  it('sets action to peat cutter', () => {
    const input = stateWith()
    const output = turnery(input)
    expect(output.G.action).toBe('peatCutter')
  })
  it('adds 4 wood to player', () => {
    const input = stateWith()
    const output = turnery(input)
    expect(output.G.players['0'].inventory.length).toBe(4)
  })
  it('peat cutters 4 times', () => {
    const input = stateWith()
    const output = turnery(input)
    expect(output.G.times).toBe(4)
  })
  // xit('adds lets the player cut peat based on the number of horses', () => {
  //   const input = stateWith()
  //   const output = turnery(input)
  //   expect(output.G.action).toBe('peatCutter')
  //   expect(output.G.times).toBe(4)
  // })
})
