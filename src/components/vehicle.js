import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './vehicle.css'

import { tokenSizes } from '../game/moves/load'

class Vehicle extends React.Component {
  occupied = offset => {
    if (this.props.vehicle.contents[offset] !== null) return true
    else if (
      offset >= 1 &&
      this.props.vehicle.contents[offset - 1] !== null &&
      tokenSizes[this.props.vehicle.contents[offset - 1]] >= 2
    )
      return true
    else if (
      offset >= 2 &&
      this.props.vehicle.contents[offset - 2] !== null &&
      tokenSizes[this.props.vehicle.contents[offset - 2]] >= 3
    )
      return true
    else if (
      offset >= 3 &&
      this.props.vehicle.contents[offset - 3] !== null &&
      tokenSizes[this.props.vehicle.contents[offset - 3]] >= 4
    )
      return true
    else return false
  }

  render() {
    const { vehicle, handleLoad, disabled } = this.props
    return (
      <div className={classNames('Vehicle', vehicle.type)}>
        <b>{vehicle.type}</b>
        <br />
        {vehicle.contents.map((slot, offset) => (
          <div style={{ border: '1px light brown', display: 'inline' }}>
            [
            {handleLoad && (
              <button
                type="button"
                key={offset}
                onClick={handleLoad(offset)}
                disabled={disabled || this.occupied(offset)}
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
}

export default Vehicle
