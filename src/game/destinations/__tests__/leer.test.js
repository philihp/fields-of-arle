import leer, { size } from '../leer'
import { inventoryAddToPlayer, countAnimals } from '../../common/player'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      // hypothetical 1x1 farm
      land: [[{ type: 'empty', contents: [] }]],
      dikes: [[{ type: 'dike', contents: ['cattle'] }]],
      inventory: ['woolen', 'winterWear', 'leatherWear', 'summerWear'],
      goods: {
        flax: 1,
        food: 0,
        grain: 2,
      },
    },
  },
}

describe('leer load', () => {
  it('has a size', () => {
    expect(size).toEqual(3)
  })

  it('noop', () => {
    expect(leer([null, null, null, null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sells flax for 2 food', () => {
    const options = [['flax'], null, null, null]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(player.goods.flax).toBe(0)
    expect(player.goods.food).toBe(2)
  })

  it('sells woolen for 3 food', () => {
    const options = [null, ['woolen'], null, null]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(3)
    expect(player.inventory).not.toContain('woolen')
  })

  it('sells cattle for 5 food', () => {
    const options = [null, null, ['cattle'], null]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 0, sheep: 0 })
    expect(player.goods.food).toBe(5)
  })

  it('sells winterWear for 6 food', () => {
    const options = [null, null, null, ['winterWear']]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[3][0])
    expect(player.goods.food).toBe(6)
  })

  it('sells summerWear for 6 food', () => {
    const options = [null, null, null, ['summerWear']]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[3][0])
    expect(player.goods.food).toBe(6)
  })

  it('sells leatherWear for 6 food', () => {
    const options = [null, null, null, ['leatherWear']]
    const player = leer(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[3][0])
    expect(player.goods.food).toBe(6)
  })
})
