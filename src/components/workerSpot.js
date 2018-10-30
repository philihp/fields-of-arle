import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import WorkerToken from './workerToken'
import './workerSpot.css'

const fillColor = worker => {
  switch (worker) {
    case 0:
      return '#fc8d62'
    case 1:
      return '#ffd92f'
    default:
      return '#efefef'
  }
}

const strokeColor = worker => {
  switch (worker) {
    case 0:
      return '#e64505'
    case 1:
      return '#c7a200'
    default:
      return '#d7d7d7'
  }
}

const WorkerSpot = ({ worker, job, disabled, onClick, label }) => {
  const handleClick = onClick ? onClick(job) : undefined

  const displayedLabel = label || job
  return (
    <div className="WorkerSpot">
      <button type="button" disabled={!handleClick} onClick={handleClick}>
        {worker !== null && (
          <WorkerToken fill={fillColor(worker)} stroke={strokeColor(worker)} />
        )}
        {displayedLabel}
      </button>
    </div>
  )
}

WorkerSpot.propTypes = {
  worker: PropTypes.any,
  label: PropTypes.string,
  job: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default WorkerSpot
