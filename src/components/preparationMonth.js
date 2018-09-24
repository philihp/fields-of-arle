import React from 'react'
import PropTypes from 'prop-types'
import StackedWorkerSpot from './stackedWorkerSpot'

const PreparationMonth = ({ month, workers }) => (
  <div>
    <div>{month}</div>
    <StackedWorkerSpot workers={workers} />
  </div>
)

PreparationMonth.propTypes = {
  workers: PropTypes.any.isRequired,
  month: PropTypes.string.isRequired,
}

export default PreparationMonth
