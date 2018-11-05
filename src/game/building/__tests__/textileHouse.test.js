import textileHouse from '../textileHouse'

const stateWith = () => ({
  G: {
    players: {
      0: {
        inventory: [],
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('textileHouse', () => {
  it('gives the player some materials', () => {
    const input = stateWith()
    const output = textileHouse(input)
    expect(output).not.toBe(input)
    const inventory = output.G.players['0'].inventory
    expect(inventory).toContain('woolen')
    expect(inventory).toContain('linen')
    expect(inventory).toContain('leather')
    expect(inventory).toHaveLength(3)
  })
})
