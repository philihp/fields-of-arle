import waterfrontHouse from '../waterfrontHouse'
import { initialState } from '../../index'

const stateWith = () => ({
  G: initialState,
  ctx: {
    currentPlayer: '0',
  },
})

describe('waterfrontHouse', () => {
  it('does not mutate state', () => {
    const input = stateWith()
    const output = waterfrontHouse(input)
    expect(output).not.toBe(input)
  })
  it('advances dikes twice', () => {
    const input = stateWith()
    const output = waterfrontHouse(input)
    expect(output.G.players['0'].dikes[3][0].type).toBe('empty')
    expect(output.G.players['0'].dikes[3][1].type).toBe('empty')
    expect(output.G.players['0'].dikes[3][2].type).toBe('dike')
    expect(output.G.players['0'].dikes[2][0].type).toBe('dike')
    expect(output.G.players['0'].dikes[2][1].type).toBe('dike')
    expect(output.G.players['0'].dikes[2][2].type).toBe('dike')
    expect(output.G.players['0'].dikes[1][0].type).toBe('dike')
    expect(output.G.players['0'].dikes[1][1].type).toBe('empty')
    expect(output.G.players['0'].dikes[1][2].type).toBe('empty')
    expect(output.G.players['0'].dikes[0][0].type).toBe('empty')
    expect(output.G.players['0'].dikes[0][1].type).toBe('empty')
    expect(output.G.players['0'].dikes[0][2].type).toBe('empty')
  })
  it('advances adds 3 fish traps', () => {
    const input = stateWith()
    const output = waterfrontHouse(input)
    expect(output.G.toolSpaces.fishTraps).toEqual([3, 0])
  })
  it('advances dikes twice', () => {
    const input = stateWith()
    const output = waterfrontHouse(input)
    expect(output.G.players['0'].goods.food).toEqual(
      10 + input.G.players['0'].goods.food
    )
  })
})
