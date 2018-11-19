import bakehouse from '../bakehouse'

const state = times => ({
  G: {
    action: 'bakehouse',
    players: {
      0: {
        inventory: [],
        tokens: [],
        goods: {
          food: 0,
          grain: 4,
          flax: 3,
        },
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
  args: [times],
})

describe('bakehouse', () => {
  it('clears the action', () => {
    const src = state(0)
    const dst = bakehouse(src)
    expect(dst.action).toBeNull()
  })

  describe('one time', () => {
    const src = state(1)
    const dst = bakehouse(src)

    it('gains food', () => {
      expect(dst.players['0'].goods.food).toBe(8)
    })
    it('consumes flax', () => {
      expect(dst.players['0'].goods.flax).toBe(
        src.G.players['0'].goods.flax - 1
      )
    })
    it('consumes grain', () => {
      expect(dst.players['0'].goods.grain).toBe(
        src.G.players['0'].goods.grain - 2
      )
    })
  })

  describe('two times', () => {
    const src = state(2)
    const dst = bakehouse(src)

    it('gains food', () => {
      expect(dst.players['0'].goods.food).toBe(16)
    })
    it('consumes flax', () => {
      expect(dst.players['0'].goods.flax).toBe(
        src.G.players['0'].goods.flax - 2
      )
    })
    it('consumes grain', () => {
      expect(dst.players['0'].goods.grain).toBe(
        src.G.players['0'].goods.grain - 4
      )
    })
  })
})
