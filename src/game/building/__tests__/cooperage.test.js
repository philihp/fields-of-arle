import cooperage from '../cooperage'

const stateWith = animals => ({
  G: {
    players: {
      0: {
        land: [
          [
            {
              type: 'doubleStall',
              contents: animals,
            },
          ],
        ],
        dikes: [[{ type: 'dike', contents: [] }]],
        goods: {
          food: 4,
          wool: 3,
          flax: 2,
          hide: 1,
          grain: 0,
        },
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('cooperage', () => {
  it('adds 1 to every good and 2 to the food', () => {
    const input = stateWith(['cattle', 'cattle', 'sheep', 'sheep', 'sheep'])
    const output = cooperage(input)
    expect(output).not.toBe(input)
    const newGoods = output.G.players['0'].goods
    expect(newGoods.food).toBe(6)
    expect(newGoods.wool).toBe(4)
    expect(newGoods.flax).toBe(3)
    expect(newGoods.hide).toBe(2)
    expect(newGoods.grain).toBe(1)
  })

  it('with 10+ animals it adds 2', () => {
    const input = stateWith(new Array(10).fill('sheep'))
    const output = cooperage(input)
    expect(output).not.toBe(input)
    const newGoods = output.G.players['0'].goods
    expect(newGoods.food).toBe(8)
    expect(newGoods.wool).toBe(5)
    expect(newGoods.flax).toBe(4)
    expect(newGoods.hide).toBe(3)
    expect(newGoods.grain).toBe(2)
  })

  it('with 15+ animals it adds 2', () => {
    const input = stateWith(new Array(15).fill('sheep'))
    const output = cooperage(input)
    expect(output).not.toBe(input)
    const newGoods = output.G.players['0'].goods
    expect(newGoods.food).toBe(10)
    expect(newGoods.wool).toBe(6)
    expect(newGoods.flax).toBe(5)
    expect(newGoods.hide).toBe(4)
    expect(newGoods.grain).toBe(3)
  })

  it('with 20+ animals it still adds 3', () => {
    const input = stateWith(new Array(20).fill('sheep'))
    const output = cooperage(input)
    expect(output).not.toBe(input)
    const newGoods = output.G.players['0'].goods
    expect(newGoods.food).toBe(10)
    expect(newGoods.wool).toBe(6)
    expect(newGoods.flax).toBe(5)
    expect(newGoods.hide).toBe(4)
    expect(newGoods.grain).toBe(3)
  })
})
