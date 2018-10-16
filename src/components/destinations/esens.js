import React from 'react'
import PropTypes from 'prop-types'

const Esens = ({ inventory, handleSellAtDestination }) => <div>Esens</div>

Esens.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Esens
