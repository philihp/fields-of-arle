import dornum, { size } from '../dornum'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      barn: {
        small1: { type: 'plow', contents: [] },
        small2: { type: 'plow', contents: [] },
        small3: { type: 'plow', contents: [] },
        small4: { type: 'plow', contents: [] },
        large1: null,
        large2: null,
        large3: { type: 'plow', contents: [] },
      },
      goods: { food: 0 },
    },
    1: {},
  },
}

describe('dornum load', () => {
  it('has a size', () => {
    expect(size).toEqual(1)
  })

  it('noop', () => {
    expect(dornum([null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sell only one plow, in large3 first, for 8 food', () => {
    const player = dornum(['plow'])({ G, ctx }).G.players['0']
    expect(player.barn).toMatchSnapshot()
    expect(player.goods.food).toBe(8)
  })
})
