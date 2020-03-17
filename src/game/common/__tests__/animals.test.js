import { findFirstAnimal } from '../animals'

describe('findFirstAnimal', () => {
  const player = {
    land: [
      [
        { type: 'empty', contents: [] },
        { type: 'empty', contents: ['cattle'] },
      ],
      [
        { type: 'empty', contents: ['sheep'] },
        { type: 'empty', contents: [] },
      ],
      [
        { type: 'empty', contents: [] },
        { type: 'empty', contents: [] },
      ],
    ],
    dikes: [
      [
        { type: 'empty', contents: [] },
        { type: 'dike', contents: ['cattle'] },
      ],
      [
        { type: 'dike', contents: [] },
        { type: 'dike', contents: [] },
      ],
      [
        { type: 'dike', contents: ['horse'] },
        { type: 'empty', contents: [] },
      ],
    ],
  }

  it('searches land', () => {
    expect(findFirstAnimal('sheep')(player)).toEqual(['land', 1, 0, 0])
  })

  it('searches dikes', () => {
    expect(findFirstAnimal('horse')(player)).toEqual(['dikes', 2, 0, 0])
  })
})
