import { listToKeyedList } from '../index'

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
