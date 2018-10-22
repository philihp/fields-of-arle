import React from 'react'
import PropTypes from 'prop-types'

const Norden = ({ inventory, handleSellAtDestination }) => <div>Norden</div>

Norden.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Norden
