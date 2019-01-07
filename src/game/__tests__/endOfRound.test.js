import {
  milking,
  babyAnimals,
  sheering,
  harvest,
  emptyVehicles,
} from '../endOfRound'
import { countAnimals } from '../../game/common/player'

describe('milking', () => {
  const playerWithAnimals = animals => ({
    // hypothetical 1x1 farm
    land: [[{ type: 'empty', contents: animals }]],
    dikes: [[{ type: 'dike', contents: [] }]],
    inventory: ['leather'],
    goods: {
      food: 0,
    },
  })

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

describe('babyAnimals', () => {
  const farmWith = (type, ...contents) => ({
    // hypothetical 1x1 farm
    land: [[{ type, contents }]],
    dikes: [[{ type: 'dike', contents: [] }]],
  })

  it('breeds babby animals', () => {
    const state = {
      // hypothetical 1x1 farm
      land: [
        [
          { type: 'empty', contents: ['horse'] },
          { type: 'empty', contents: [] },
        ],
        [
          { type: 'stall', contents: ['horse', 'horse'] },
          { type: 'stable', contents: ['sheep', 'sheep', 'sheep', 'sheep'] },
        ],
      ],
      dikes: [[{ type: 'dike', contents: ['cattle'] }]],
    }
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 1,
      horses: 4,
      sheep: 6,
    })
  })

  it('breeds in a stall', () => {
    const state = {
      // hypothetical 1x1 farm
      land: [[{ type: 'stable', contents: ['horse', 'horse'] }]],
      dikes: [[{ type: 'dike', contents: ['cattle'] }]],
    }
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 1,
      horses: 3,
      sheep: 0,
    })
  })

  it('breeds 2 in a stable', () => {
    const state = farmWith('stable', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 0,
    })
  })

  it('breeds 3 in a stable', () => {
    const state = farmWith('stable', 'horse', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 4,
      sheep: 0,
    })
  })

  it('breeds 4 in a stable', () => {
    const state = farmWith('stable', 'horse', 'horse', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 5 in a stable', () => {
    const state = farmWith(
      'stable',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 6 in a stable', () => {
    const state = farmWith(
      'stable',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 2 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 0,
    })
  })

  it('breeds 3 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 4,
      sheep: 0,
    })
  })

  it('breeds 4 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse', 'horse', 'horse')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 5 in a doubleStall', () => {
    const state = farmWith(
      'doubleStall',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 6 in a doubleStall', () => {
    const state = farmWith(
      'doubleStall',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse',
      'horse'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 6,
      sheep: 0,
    })
  })

  it('breeds 1x1 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 1,
      sheep: 1,
    })
  })

  it('breeds 1x2 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'sheep', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 1,
      sheep: 3,
    })
  })

  it('breeds 1x3 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'sheep', 'sheep', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 1,
      sheep: 3,
    })
  })

  it('breeds 2x1 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 1,
    })
  })

  it('breeds 2x2 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse', 'sheep', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 3,
    })
  })

  it('breeds 2x3 in a doubleStall', () => {
    const state = farmWith(
      'doubleStall',
      'horse',
      'horse',
      'sheep',
      'sheep',
      'sheep'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 3,
    })
  })

  it('breeds 3x1 in a doubleStall', () => {
    const state = farmWith('doubleStall', 'horse', 'horse', 'horse', 'sheep')
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 1,
    })
  })
  it('breeds 3x2 in a doubleStall', () => {
    const state = farmWith(
      'doubleStall',
      'horse',
      'horse',
      'horse',
      'sheep',
      'sheep'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 3,
    })
  })
  it('breeds 3x3 in a doubleStall', () => {
    const state = farmWith(
      'doubleStall',
      'horse',
      'horse',
      'horse',
      'sheep',
      'sheep',
      'sheep'
    )
    const result = babyAnimals(state)
    expect(countAnimals(result)).toEqual({
      cattle: 0,
      horses: 3,
      sheep: 3,
    })
  })
})

describe('sheering', () => {
  const playerWithAnimals = animals => ({
    // hypothetical 1x1 farm
    land: [[{ type: 'empty', contents: animals }]],
    dikes: [[{ type: 'dike', contents: [] }]],
    goods: {
      wool: 0,
    },
  })

  it('gives 0 wool for no sheep', () => {
    const result = sheering(playerWithAnimals([]))
    expect(result.goods.wool).toBe(0)
  })

  it('gives 1 wool for some sheep', () => {
    const animals = new Array(4).fill('sheep')
    const result = sheering(playerWithAnimals(animals))
    expect(result.goods.wool).toBe(2)
  })

  it('gives 3 wool for some sheep', () => {
    const animals = new Array(6).fill('sheep')
    const result = sheering(playerWithAnimals(animals))
    expect(result.goods.wool).toBe(3)
  })
})

describe('harvest', () => {
  const player = {
    land: [
      [
        { type: 'grain', contents: [] },
        { type: 'grain', contents: [] },
        { type: 'empty', contents: [] },
      ],
      [
        { type: 'flax', contents: [] },
        { type: 'grain', contents: [] },
        { type: 'empty', contents: [] },
      ],
      [
        { type: 'forest', contents: [] },
        { type: 'grain', contents: [] },
        { type: 'forest', contents: [] },
      ],
    ],
    dikes: [[]],
    inventory: [],
    goods: {
      flax: 0,
      grain: 0,
    },
  }

  it('harvests from grain, flax, and wood', () => {
    const result = harvest(player)
    expect(result.goods.flax).toBe(1)
    expect(result.goods.grain).toBe(4)
    expect(result.inventory).toHaveLength(2)
    expect(result.inventory).toContain('wood')
  })
})

describe('emptyVehicles', () => {
  it('empties vehicles with destinations', () => {
    const player = {
      barn: {
        small1: { contents: ['bremen'] },
        small2: { contents: ['aurich'] },
        small3: { contents: ['dornum', null, 'hage'] },
        small4: null,
        large1: { contents: ['emden'] },
        large2: { contents: ['wood'] },
        large3: { contents: [null, null] },
      },
      travelExperience: 10,
      inventory: [],
    }
    const result = emptyVehicles(player)
    expect(result.travelExperience).toEqual(21)
  })
  it('flips clay and wood', () => {
    const player = {
      barn: {
        small1: { contents: ['clay'] },
        small2: { contents: ['wood'] },
        small3: { contents: ['brick', null, null, null] },
        small4: null,
        large1: { contents: ['emden'] },
        large2: { contents: [null] },
        large3: { contents: [null, null] },
      },
      travelExperience: 10,
      inventory: [],
    }
    const result = emptyVehicles(player)
    expect(result.inventory).toEqual(['brick', 'timber', 'brick'])
  })
  it('replaces slots with nulls', () => {
    const player = {
      barn: {
        small1: null,
        small2: null,
        small3: { contents: ['brick', null, 'emden', null] },
        small4: null,
        large1: { contents: ['emden'] },
        large2: { contents: [null] },
        large3: { contents: [null, null] },
      },
      travelExperience: 10,
      inventory: [],
    }
    const result = emptyVehicles(player)
    expect(result.barn.small3.contents).toEqual([null, null, null, null])
    expect(result.barn.large1.contents).toEqual([null])
    expect(result.barn.large3.contents).toEqual([null, null])
  })
})
