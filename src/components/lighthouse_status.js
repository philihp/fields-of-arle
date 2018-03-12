import React from 'react'
import PropTypes from 'prop-types'

const color = worker => {
  switch (worker) {
    case 0:
      return '#e64505'
    case 1:
      return '#c7a200'
    default:
      return 'red'
  }
}

const LighthouseStatus = props => (
  <div style={{ display: 'inline-block' }}>
    Lighthouse:{' '}
    <span
      style={{
        fontWeight: 'bold',
        color: color(props.lighthouse.owner),
      }}
    >
      {props.lighthouse.owner}
    </span>
    {!props.lighthouse.used && ' unused'}
  </div>
)

LighthouseStatus.propTypes = {
  lighthouse: PropTypes.any.isRequired,
}

export default LighthouseStatus
