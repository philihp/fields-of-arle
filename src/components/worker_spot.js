import React from 'react'
import PropTypes from 'prop-types'
import WorkerToken from './worker_token'
import classNames from 'classnames'
import './worker_spot.css'

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

const WorkerSpot = ({ workerSpaces, job, disabled, onClick, label }) => {
  const worker = workerSpaces[job]
  const handleClick = e => {
    if (disabled) {
      return
    }
    e.preventDefault()
    onClick(job)
  }

  const displayedLabel = label || job
  if (worker !== null) {
    return (
      <div className="WorkerSpot">
        <WorkerToken fill={fillColor(worker)} stroke={strokeColor(worker)} />
        {displayedLabel}
      </div>
    )
  } else {
    return (
      <div
        onClick={handleClick}
        className={classNames({
          WorkerSpot: true,
          disabled: disabled,
          clickable: !disabled,
        })}
      >
        {displayedLabel}
      </div>
    )
  }
}

WorkerSpot.propTypes = {
  workerSpaces: PropTypes.any.isRequired,
  label: PropTypes.string,
  job: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default WorkerSpot
