import React from 'react'
import PropTypes from 'prop-types'

const Aurich = ({ inventory, handleSellAtDestination }) => <div>Aurich</div>

Aurich.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Aurich
