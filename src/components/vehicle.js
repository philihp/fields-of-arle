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
    const v = vehicleOccupiedMask(vehicle)
    const c = contentMask(tokenSize, offset)
    return (v & c) === c
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
