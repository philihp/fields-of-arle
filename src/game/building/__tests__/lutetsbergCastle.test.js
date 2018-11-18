import lutetsbergCastle from '../lutetsbergCastle'

const stateWith = () => ({
  G: {
    toolSpaces: {
      workbenches: [0, 0],
      spades: [0, 0],
      potteryWheels: [0, 0],
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('lutetsbergCastle', () => {
  it('advances the workbenches once', () => {
    const input = stateWith()
    const output = lutetsbergCastle(input)
    expect(output.G.toolSpaces.workbenches).toEqual([1, 0])
  })
  it('advances the spades once', () => {
    const input = stateWith()
    const output = lutetsbergCastle(input)
    expect(output.G.toolSpaces.spades).toEqual([1, 0])
  })
  it('advances the potteryWheels once', () => {
    const input = stateWith()
    const output = lutetsbergCastle(input)
    expect(output.G.toolSpaces.potteryWheels).toEqual([1, 0])
  })
  it('brings up dialog to place a forest', () => {
    const input = stateWith()
    const output = lutetsbergCastle(input)
    expect(output.G.action).toBe('foresterPlace')
  })
})
