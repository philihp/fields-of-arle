import { listToKeyedList, remove } from '../index'

describe('listToKeyedList', () => {
  it('accepts a list of items', () => {
    expect(
      listToKeyedList(['wood', 'wood', 'clay', 'wood', 'peat', 'clay'])
    ).toEqual([
      { item: 'wood', key: 'wood-0' },
      { item: 'wood', key: 'wood-1' },
      { item: 'clay', key: 'clay-0' },
      { item: 'wood', key: 'wood-2' },
      { item: 'peat', key: 'peat-0' },
      { item: 'clay', key: 'clay-1' },
    ])
  })
})

describe('remove', () => {
  it('removes a single element from the beginning', () => {
    expect(remove('a')(['a', 'b', 'c'])).toEqual(['b', 'c'])
  })
  it('removes a single element from the middle', () => {
    expect(remove('b')(['a', 'b', 'c'])).toEqual(['a', 'c'])
  })
  it('removes a single element from the end', () => {
    expect(remove('c')(['a', 'b', 'c'])).toEqual(['a', 'b'])
  })
  it('removes a single element from the beginning with another in the list', () => {
    expect(remove('a')(['a', 'a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })
  it('removes a single element from the middle with another in the list', () => {
    expect(remove('b')(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })
  it('removes a single element from the end with another in the list', () => {
    expect(remove('c')(['a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c'])
  })
  it('removes the last element', () => {
    expect(remove('a')(['a'])).toEqual([])
  })
  it('removes many from the list', () => {
    expect(remove('a', 'c', 'e')(['a', 'b', 'c', 'd', 'e'])).toEqual(['b', 'd'])
  })
  it('removes two of the same from the list', () => {
    expect(remove('a', 'a')(['a', 'b', 'a', 'b', 'a'])).toEqual(['b', 'b', 'a'])
  })
})
