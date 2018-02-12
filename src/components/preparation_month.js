import React from 'react'
import PropTypes from 'prop-types'
import StackedWorkerSpot from './stacked_worker_spot'

const PreparationMonth = props =>
  <div>
    <div>{props.month}</div>
    <StackedWorkerSpot workers={props.workers} />
  </div>

PreparationMonth.propTypes = {
  workers: PropTypes.any.isRequired,
  month: PropTypes.string.isRequired,
}

export default PreparationMonth
