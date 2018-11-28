import bremen, { size } from '../bremen'
import { inventoryAddToPlayer, countAnimals } from '../../common/player'
import { initialState } from '../../index'

const ctx = { currentPlayer: 0 }
const G = {
  players: {
    0: {
      land: initialState(2).players[0].land,
      dikes: [
        [
          { type: 'dike', contents: ['cattle'] },
          { type: 'dike', contents: ['cattle'] },
          { type: 'dike', contents: ['sheep'] },
        ],
        [
          { type: 'empty', contents: [] },
          { type: 'dike', contents: [] },
          { type: 'dike', contents: ['sheep'] },
        ],
      ],
      inventory: [
        'timber',
        'linen',
        'woolen',
        'leather',
        'winterWear',
        'summerWear',
        'leatherWear',
      ],
      goods: { food: 0 },
    },
  },
}

describe('bremen load', () => {
  it('has a size', () => {
    expect(size).toEqual(4)
  })

  it('noop', () => {
    expect(bremen([null, null, null, null, null])({ G, ctx })).toEqual({
      G,
      ctx,
    })
  })

  it('sells moor for no food', () => {
    const options = [['moor-2'], null, null, null, null]
    const player = bremen(options)({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(0)
  })

  it('sells timber for 5 food', () => {
    const options = [null, ['timber'], null, null, null]
    const player = bremen(options)({ G, ctx }).G.players['0']
    expect(player.goods.food).toBe(5)
    expect(player.inventory).not.toContain('timber')
  })

  it('sells cattle for 5 food', () => {
    const options = [null, null, ['cattle', 'cattle'], null, null]
    const player = bremen(options)({ G, ctx }).G.players['0']
    expect(countAnimals(player)).toEqual({ cattle: 0, horses: 1, sheep: 2 })
    expect(player.goods.food).toBe(9)
  })

  it('sells clothing material set for 12 food', () => {
    const options = [null, null, null, ['linen', 'woolen', 'leather'], null]
    const player = bremen(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[3][0])
    expect(player.inventory).not.toContain(options[3][1])
    expect(player.inventory).not.toContain(options[3][2])
    expect(player.goods.food).toBe(12)
  })

  it('sells clothing set for 30 food', () => {
    const options = [
      null,
      null,
      null,
      null,
      ['summerWear', 'leatherWear', 'winterWear'],
    ]
    const player = bremen(options)({ G, ctx }).G.players['0']
    expect(player.inventory).not.toContain(options[4][0])
    expect(player.inventory).not.toContain(options[4][1])
    expect(player.inventory).not.toContain(options[4][2])
    expect(player.goods.food).toBe(30)
  })
})
