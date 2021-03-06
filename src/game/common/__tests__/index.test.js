import {
  afford,
  distinct,
  listToKeyedList,
  remove,
  repeat,
  removeFirstItems,
} from '../index'

describe('index', () => {
  describe('afford', () => {
    it('returns false if impossible to pay for it', () => {
      const inventory = ['brick', 'brick', 'wood', 'wood', 'clay', 'brick']
      const cost = ['timber']
      const output = afford(inventory, cost)
      expect(output).toBe(false)
    })
    it('can count multiple costs', () => {
      const inventory = ['brick', 'brick', 'wood', 'wood', 'clay', 'brick']
      const cost = ['wood', 'wood']
      const output = afford(inventory, cost)
      expect(output).toBe(true)
    })
    it('returns false when cost is 3x of a thing and we only have 2x of a thing', () => {
      const inventory = ['brick', 'brick', 'wood', 'wood', 'clay', 'brick']
      const cost = ['wood', 'wood', 'wood']
      const output = afford(inventory, cost)
      expect(output).toBe(false)
    })
    it('converts supports mixed costs', () => {
      const inventory = ['brick', 'brick', 'wood', 'wood', 'clay', 'brick']
      const cost = ['wood', 'wood', 'clay']
      const output = afford(inventory, cost)
      expect(output).toBe(true)
    })
  })

  describe('distinct', () => {
    it('returns a distinct count of the things provided', () => {
      const inventory = ['brick', 'brick', 'wood', 'wood', 'clay', 'brick']
      expect(distinct(inventory, ['brick', 'wood'])).toBe(2)
    })
  })

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
      expect(remove('a', 'c', 'e')(['a', 'b', 'c', 'd', 'e'])).toEqual([
        'b',
        'd',
      ])
    })
    it('removes two of the same from the list', () => {
      expect(remove('a', 'a')(['a', 'b', 'a', 'b', 'a'])).toEqual([
        'b',
        'b',
        'a',
      ])
    })
  })

  describe('repeat', () => {
    it('repeats 1 times', () => {
      const fa = jest.fn()
      expect(repeat(1, fa)).toEqual([fa])
    })
    it('repeats 3 times', () => {
      const fa = jest.fn()
      expect(repeat(3, fa)).toEqual([fa, fa, fa])
    })
    it('repeats a sequence 3 times', () => {
      const fa = 'a'
      const fb = 'b'
      const fc = 'c'
      expect(repeat(2, fa, fb, fc)).toEqual(['a', 'b', 'c', 'a', 'b', 'c'])
    })
  })

  describe('removeFirstItems', () => {
    it('removes nothing from an empty list', () => {
      const result = [].reduce(removeFirstItems('clay'), {
        list: [],
        count: 4,
      })
      expect(result.count).toBe(4)
      expect(result.list).toEqual([])
    })
    it('removes all it can from a partial list', () => {
      const result = ['clay', 'wood'].reduce(removeFirstItems('clay'), {
        list: [],
        count: 2,
      })
      expect(result.count).toBe(1)
      expect(result.list).toEqual(['wood'])
    })
    it('removes no more than it needs to', () => {
      const result = ['clay', 'wood', 'clay', 'clay', 'brick', 'clay'].reduce(
        removeFirstItems('clay'),
        {
          list: [],
          count: 3,
        }
      )
      expect(result.count).toBe(0)
      expect(result.list).toEqual(['wood', 'brick', 'clay'])
    })
  })
})
