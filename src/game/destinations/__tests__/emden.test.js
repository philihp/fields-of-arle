import emden, { size } from '../emden'
import { inventoryAddToPlayer, countAnimals } from '../../common/player'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      inventory: ['peat', 'summerWear', 'winterWear', 'leatherWear'],
      goods: {
        food: 0,
      },
    },
  },
}

describe('emden load', () => {
  it('has a size', () => {
    expect(size).toEqual(3)
  })

  it('noop', () => {
    expect(emden([null, null, null, null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sells peat for 3 food', () => {
    const options = [['peat'], null, null, null]
    const player = emden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[0][0])
    expect(player.goods.food).toBe(3)
  })

  it('sells summerWear for 6 food', () => {
    const options = [null, ['summerWear'], null, null]
    const player = emden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[1][0])
    expect(player.goods.food).toBe(6)
  })

  it('sells leatherWear for 7 food', () => {
    const options = [null, null, ['leatherWear'], null]
    const player = emden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[2][0])
    expect(player.goods.food).toBe(7)
  })

  it('sells winterWear for 7 food', () => {
    const options = [null, null, null, ['winterWear']]
    const player = emden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[3][0])
    expect(player.goods.food).toBe(7)
  })

  it('sells everything for 23 food', () => {
    const options = [['peat'], ['summerWear'], ['leatherWear'], ['winterWear']]
    const player = emden(options)({ G, ctx }).G.players['0']
    expect(player.inventory).toEqual([])
    expect(player.goods.food).toBe(23)
  })
})
