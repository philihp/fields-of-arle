import React from 'react'
import PropTypes from 'prop-types'

const Emden = ({ inventory, handleSellAtDestination }) => <div>Emden</div>

Emden.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Emden
