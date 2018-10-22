import React from 'react'
import PropTypes from 'prop-types'

const Hage = ({ inventory, handleSellAtDestination }) => <div>Hage</div>

Hage.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Hage
