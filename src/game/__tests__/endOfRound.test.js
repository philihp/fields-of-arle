import { milking } from '../endOfRound'
import { initialState } from '../index'

const playerWithAnimals = animals => ({
  // hypothetical 1x1 farm
  land: [[{ type: 'empty', contents: animals }]],
  dikes: [[{ type: 'dike', contents: [] }]],
  inventory: ['leather'],
  goods: {
    food: 0,
  },
})

describe('milking', () => {
  it('gives a food for some sheep', () => {
    const animals = new Array(4).fill('sheep')
    const result = milking(playerWithAnimals(animals))
    expect(result.goods.food).toBe(1)
  })
  it('gives 2 food for some cattle', () => {
    const animals = new Array(4).fill('cattle')
    const result = milking(playerWithAnimals(animals))
    expect(result.goods.food).toBe(2)
  })
  it('gives more food for some sheep and cattle', () => {
    const sheep = new Array(4).fill('sheep')
    const cattle = new Array(4).fill('cattle')
    const result = milking(playerWithAnimals([...sheep, ...cattle]))
    expect(result.goods.food).toBe(3)
  })
  it('gives no more than 3 food for hella sheep', () => {
    const sheep = new Array(30).fill('sheep')
    const result = milking(playerWithAnimals(sheep))
    expect(result.goods.food).toBe(3)
  })
})
