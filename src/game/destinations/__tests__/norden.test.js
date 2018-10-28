import norden, { size } from '../norden'
import { countAnimals } from '../../common/player'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      inventory: ['winterWear'],
      // hypothetical 1x1 farm
      land: [[{ type: 'empty', contents: ['horse'] }]],
      dikes: [[{ type: 'dike', contents: ['sheep'] }]],
      barn: {
        small1: { type: 'peatBoat', contents: [] },
        small2: { type: 'peatBoat', contents: [] },
        small3: { type: 'peatBoat', contents: [] },
        small4: { type: 'peatBoat', contents: [] },
        large1: null,
        large2: null,
        large3: { type: 'peatBoat', contents: [] },
      },
      goods: { food: 0 },
    },
    1: {},
  },
}

describe('norden load', () => {
  it('has a size', () => {
    expect(size).toEqual(2)
  })

  it('noop', () => {
    expect(norden([null, null, null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sells a sheep for 4 food', () => {
    const options = [['sheep'], null, null]
    const player = norden(options)({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 1, sheep: 0 })
    expect(player.goods.food).toBe(4)
  })

  it('sell only one peatBoat, in large3 first, for 5 food', () => {
    const options = [null, ['peatBoat'], null]
    const player = norden(options)({ G, ctx }).G.players['0']
    expect(player.barn).toMatchSnapshot()
    expect(player.goods.food).toBe(5)
  })

  it('sells winterWear for 7 food', () => {
    const options = [null, null, ['winterWear']]
    const player = norden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain('winterWear')
    expect(player.goods.food).toBe(7)
  })
})
