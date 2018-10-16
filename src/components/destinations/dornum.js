import React from 'react'
import PropTypes from 'prop-types'

const Dornum = ({ inventory, handleSellAtDestination }) => <div>Dornum</div>

Dornum.propTypes = {
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Dornum
