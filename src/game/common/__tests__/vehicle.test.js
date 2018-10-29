import { flipVehicle } from '../vehicle'

const upgradedVehicle = {
  handcart: 'wagon',
  peatBoat: 'plow',
  cart: 'horseCart',
  carriage: 'droshky',
}

describe('flipVehicle', () => {
  it('flips a handcart', () => {
    const expected = { type: 'wagon', contents: ['tuna', null] }
    const actual = flipVehicle({ type: 'handcart', contents: ['tuna'] })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })

  it('flips a peatBoat', () => {
    const expected = { type: 'plow', contents: [] }
    const actual = flipVehicle({ type: 'peatBoat', contents: [] })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })

  it('flips a cart', () => {
    const expected = {
      type: 'horseCart',
      contents: ['tuna', 'bread', 'chips', null],
    }
    const actual = flipVehicle({
      type: 'cart',
      contents: ['tuna', 'bread', 'chips'],
    })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })

  it('flips a carriage', () => {
    const expected = {
      type: 'droshky',
      contents: ['tuna', 'bread', null],
    }
    const actual = flipVehicle({
      type: 'carriage',
      contents: ['tuna', 'bread'],
    })
    expect(actual.type).toEqual(expected.type)
    expect(actual.contents).toEqual(expected.contents)
  })

  it('returns itself if nothing to do', () => {
    const input = { type: 'wagon', contents: ['tuna', null] }
    const output = flipVehicle(input)
    expect(input).toBe(output)
  })
})
