import { flipBuilding } from '../building'

const upgradedBuilding = {
  forest: 'park',
  stall: 'depot',
  stable: 'doubleStall',
  moorNorth: 'dmoorNorth',
}

describe('flipBuilding', () => {
  it('leaves weird building alone', () => {
    const input = { type: 'other', contents: ['tuna'] }
    const output = flipBuilding(input)
    expect(output).toBe(input)
  })

  it('does not mutate contents', () => {
    const contents = ['a', 'b']
    const actual = flipBuilding({ type: 'forest', contents: contents })
    expect(actual.contents).toBe(contents)
  })

  it('flips a forest', () => {
    const expected = { type: 'park', contents: [] }
    const actual = flipBuilding({ type: 'forest', contents: [] })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })

  it('flips a stable', () => {
    const expected = {
      type: 'doubleStall',
      contents: ['tuna'],
    }
    const actual = flipBuilding({
      type: 'stable',
      contents: ['tuna'],
    })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })
})
