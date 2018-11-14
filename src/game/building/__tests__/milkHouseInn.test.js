// import { countAnimals } from '../../common/player'
import milkHouseInn from '../milkHouseInn'

const stateWith = () => ({
  G: {
    players: {
      0: {
        tokens: [],
        inventory: [],
        land: [
          [
            { type: 'stall', contents: ['cattle'] },
            { type: 'stall', contents: [] },
          ],
          [
            { type: 'stall', contents: [] },
            { type: 'stall', contents: ['cattle'] },
          ],
        ],
        dikes: [[{ type: 'empty', contents: [] }]],
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('milkHouseInn', () => {
  it('adds a cattle', () => {
    const input = stateWith()
    const output = milkHouseInn(input)
    // expect(countAnimals(output.G.players[output.ctx.currentPlayer]).cattle).toBe(3)
    // TODO: make countAnimals include tokens
  })
  it('peat cutters for every cattle', () => {
    const input = stateWith()
    const output = milkHouseInn(input)
    expect(output.G.action).toBe('peatCutter')
    expect(output.G.times).toBe(3)
  })
})
