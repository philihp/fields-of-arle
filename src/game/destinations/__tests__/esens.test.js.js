import esens, { size } from '../esens'
import { inventoryAddToPlayer, countAnimals } from '../../common/player'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      // hypothetical 1x1 farm
      inventory: ['linen'],
      goods: {
        hide: 1,
        food: 0,
        grain: 2,
      },
    },
  },
}

describe('esens load', () => {
  it('has a size', () => {
    expect(size).toEqual(2)
  })

  it('noop', () => {
    expect(esens([null, null, null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sells hide for 2 food', () => {
    const player = esens([['hide'], null, null])({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(2)
    expect(player.goods.hide).toBe(0)
  })

  it('sells 2x grain for 4 food', () => {
    const player = esens([null, ['grain', 'grain'], null])({ G, ctx }).G
      .players['0']
    expect(player.goods.grain).toBe(0)
    expect(player.goods.food).toBe(4)
  })

  it('sells linen for 4 food', () => {
    const player = esens([null, null, ['linen']])({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain('linen')
    expect(player.goods.food).toBe(4)
  })

  it('sells all three', () => {
    const player = esens([['hide'], ['grain', 'grain'], ['linen']])({ G, ctx })
      .G.players['0']
    expect(player.inventory).not.toContain('linen')
    expect(player.goods.hide).toBe(0)
    expect(player.goods.grain).toBe(0)
    expect(player.goods.food).toBe(10)
  })
})
