/* eslint-disable no-bitwise */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './vehicle.css'

import { tokenSizes } from '../game/moves/load'

const bin = n =>
  Number(n)
    .toString(2)
    .padStart(8, '0')

// a 1 represents an available slot
const vehicleMask = {
  handcart: /* */ 0b00000001,
  wagon: /*    */ 0b00000011,
  peatBoat: /* */ 0b00000000,
  plow: /*     */ 0b00000000,
  cart: /*     */ 0b00000111,
  horseCart: /**/ 0b00001111,
  carriage: /* */ 0b00000111,
  droshky: /*  */ 0b00001111,
}

const tokenMask = {
  [null]: 0,
  1: 0b00000001,
  2: 0b00000011,
  3: 0b00000111,
  4: 0b00001111,
}

const contentMask = (tokenSize, offset) => tokenMask[tokenSize] << offset

const contentsMasker = (accum, content) => ({
  mask: accum.mask ^ contentMask(tokenSizes[content], accum.offset),
  offset: accum.offset + 1,
})

const vehicleOccupiedMask = vehicle =>
  vehicle.contents.reduce(contentsMasker, {
    mask: vehicleMask[vehicle.type],
    offset: 0,
  }).mask

class Vehicle extends React.Component {
  fitsMask = (vehicle, offset, tokenSize) => {
    // droshky   [_][_  _][_]
    // carriage  [_][_  _]
    // horsecart [_][_][_][_]
    // cart:     [_][_][_]
    // Droshky and Carriage really only restrict from a couple situations when the token is 1 and when it's 2. Easier to handle these by hand.
    if (['droshky', 'carriage'].includes(vehicle.type)) {
      if ((tokenSize === 1 && offset === 1) || offset === 2) return false
      if ((tokenSize === 2 && offset === 0) || offset === 2) return false
    }
    // This part was fun...
    // First, compute a bitmask of the vehicle, where any "1" is an open spot, and any "0" is a closed spot.
    // This means a horsecart with something like [____][____][wood][____] would look like 00001101
    const v = vehicleOccupiedMask(vehicle)

    // Then compute the bitmask of the thing we want to drop, given which offset.
    // This means a woolen (2 wide) tile will be: 00000011
    // but if you wanna put it in the 1st offset: 00000110
    // and if you wanna put it in the 2nd offset: 00001100
    // and if you wanted to put it in the 3rd:    00011000 -- which obviously will never work
    const c = contentMask(tokenSize, offset)

    // Then logical AND them together. This will leave only bits "on" where that slot was open.
    // That means all of the bits from the content mask should be on -- so that should equal the contentMask.
    return (v & c) === c

    // and if that's true, then the content will fit in the vehicle's occupied mask. Hurray!
  }

  render() {
    const { vehicle, handleLoad, disabled, tokenSize } = this.props
    const mask = vehicleOccupiedMask(vehicle)
    return (
      <div className={classNames('Vehicle', vehicle.type)}>
        <b>{vehicle.type}</b>
        <br />
        {vehicle.contents.map((slot, offset) => (
          <div
            key={offset}
            style={{ border: '1px light brown', display: 'inline' }}
          >
            [
            {handleLoad && (
              <button
                type="button"
                key={offset}
                onClick={handleLoad(offset)}
                disabled={
                  disabled || !this.fitsMask(vehicle, offset, tokenSize)
                }
              >
                Load
              </button>
            )}
            {slot}]
          </div>
        ))}
      </div>
    )
  }
}

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired,
  handleLoad: PropTypes.func,
  disabled: PropTypes.bool,
  tokenSize: PropTypes.number,
}

export default Vehicle
