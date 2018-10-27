import aurich, { size } from '../aurich'
import { inventoryAddToPlayer, countAnimals } from '../../common/player'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      // hypothetical 1x1 farm
      land: [[{ type: 'empty', contents: ['horse'] }]],
      dikes: [[{ type: 'dike', contents: ['sheep', 'horse'] }]],
      inventory: ['leather'],
      goods: {
        food: 0,
      },
    },
  },
}

describe('aurich load', () => {
  it('has a size', () => {
    expect(size).toEqual(2)
  })

  it('noop', () => {
    expect(aurich([null, null, null])({ G, ctx })).toEqual({ G, ctx })
  })

  it('sells leather for 4 food', () => {
    const player = aurich([['leather'], null, null])({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain('leather')
    expect(player.goods.food).toBe(4)
  })

  it('sells only one leather for 4 food', () => {
    const G2 = {
      ...G,
      players: {
        ...G.players,
        0: inventoryAddToPlayer('leather')(G.players['0']),
      },
    }
    const player = aurich([['leather'], null, null])({ G: G2, ctx }).G.players[
      '0'
    ]
    expect(player.inventory).toContain('leather')
    expect(player.goods.food).toBe(4)
  })

  it('sells sheep for 4 food', () => {
    const player = aurich([null, ['sheep'], null])({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 2, sheep: 0 })
    expect(player.goods.food).toBe(4)
  })

  it('sells horse in second slot for 4 food', () => {
    const player = aurich([null, ['horse'], null])({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 1, sheep: 1 })
    expect(player.goods.food).toBe(4)
  })

  it('sells horse in third slot for 5 food', () => {
    const player = aurich([null, null, ['horse']])({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 1, sheep: 1 })
    expect(player.goods.food).toBe(5)
  })

  it('sells horses in second and third slot for 9 food', () => {
    const player = aurich([null, ['sheep'], ['horse']])({ G, ctx }).G.players[
      '0'
    ]
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 1, sheep: 0 })
    expect(player.goods.food).toBe(9)
  })

  it('does nothing if no animals', () => {
    const G2 = {
      ...G,
      players: {
        ...G.players,
        0: {
          // hypothetical 1x1 farm
          land: [[{ type: 'empty', contents: [] }]],
          dikes: [[{ type: 'dike', contents: [] }]],
          goods: {
            food: 0,
          },
        },
      },
    }
    const player = aurich([null, ['horse'], null])({ G: G2, ctx }).G.players[
      '0'
    ]
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 0, sheep: 0 })
  })
})
