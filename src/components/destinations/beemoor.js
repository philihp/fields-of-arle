import React from 'react'
import PropTypes from 'prop-types'

const Beemoor = ({ inventory, handleSellAtDestination }) => <div>Beemoor</div>

Beemoor.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Beemoor
