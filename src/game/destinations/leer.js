import React from 'react'
import PropTypes from 'prop-types'

const Leer = ({ inventory, handleSellAtDestination }) => <div>Leer</div>

Leer.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Leer
