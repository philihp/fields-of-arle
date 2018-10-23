import beemoor, { size } from '../beemoor'

const G = {
  players: {
    0: {
      inventory: ['hearts', 'stars', 'peat', 'horseshoes'],
      goods: {
        food: 0,
      },
    },
    1: {},
  },
}

const ctx = {
  currentPlayer: 0,
}

describe('beemoor load', () => {
  it('has a size', () => {
    expect(size).toEqual(1)
  })

  it('noop', () => {
    expect(beemoor([null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('consumes peat', () => {
    const player = beemoor(['peat'])({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain('peat')
  })

  it('generates 2 food', () => {
    const player = beemoor(['peat'])({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(2)
  })
})
