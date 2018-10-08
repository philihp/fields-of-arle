import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './vehicle.css'

const Vehicle = ({ vehicle, handleLoad }) => (
  <div className={classNames('Vehicle', vehicle.type)}>
    <b>{vehicle.type}</b>
    {handleLoad && (
      <button type="button" onClick={handleLoad}>
        Load
      </button>
    )}
    <br />[{vehicle.contents.join(', ')}]
  </div>
)

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired,
  handleLoad: PropTypes.func,
}

export default Vehicle
