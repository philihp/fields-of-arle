import React from 'react'
import PropTypes from 'prop-types'

const TableauDestinations = ({ destinations, handleLoad }) => (
  <div className="TableauDestinations">
    {handleLoad &&
      destinations &&
      destinations.map(destination => (
        <button
          type="button"
          key={destination}
          disabled={handleLoad == null}
          onClick={handleLoad && handleLoad(destination)}
        >
          {destination}
        </button>
      ))}
    {!handleLoad && destinations && destinations.join(', ')}
  </div>
)

TableauDestinations.propTypes = {
  destinations: PropTypes.array,
  handleLoad: PropTypes.func,
}

export default TableauDestinations
