import hage, { size } from '../hage'

const G = {
  players: {
    0: {
      land: [
        [
          { type: 'flax', contents: [] },
          { type: 'flax', contents: [] },
          { type: 'flax', contents: [] },
        ],
        [
          { type: 'flax', contents: [] },
          { type: 'flax', contents: [] },
          { type: 'flax', contents: [] },
        ],
        [
          { type: 'stall', contents: ['horse', 'horse'] },
          { type: 'empty', contents: [] },
          { type: 'flax', contents: [] },
        ],
      ],
      goods: {
        food: 0,
      },
    },
  },
}

const ctx = {
  currentPlayer: 0,
}

describe('hage load', () => {
  it('has a size', () => {
    expect(size).toEqual(1)
  })

  it('noop', () => {
    expect(hage([null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('removes the field', () => {
    const player = hage([['flax-2-0']])({ G, ctx }).G.players['0']
    expect(player.land).toMatchSnapshot()
  })

  it('generates 1 food', () => {
    const player = hage([['flax-2-0']])({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(1)
  })
})
