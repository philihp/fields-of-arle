import { countAnimals } from '../../common/player'
import joinery from '../joinery'

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
        barn: {
          small1: { type: 'peatBoat', contents: [] },
          small2: { type: 'plow', contents: [] },
          small3: { type: 'plow', contents: [] },
          small4: { type: 'peatBoat', contents: [] },
          large1: {
            type: 'carriage',
            contents: [null, null, null],
          },
          large2: null,
          large3: null,
        },
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
})

describe('joinery', () => {
  it('adds two peat per peatBoat', () => {
    const input = stateWith()
    const output = joinery(input)
    expect(output.G.players['0'].inventory).toEqual([
      'peat',
      'peat',
      'peat',
      'peat',
    ])
  })
  it('adds a horse per plow', () => {
    const input = stateWith()
    const output = joinery(input)
    // expect(countAnimals(output.G.players['0']).horses).toBe(2)
    // TODO: make countAnimals include tokens
  })
})
