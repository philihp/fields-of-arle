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

const LighthouseStatus = ({ lighthouse }) => (
  <div
    style={{
      display: 'inline-block',
      float: 'right',
      marginTop: '4px',
      marginLeft: '4px',
    }}
  >
    Lighthouse:{' '}
    <span
      style={{
        fontWeight: 'bold',
        color: color(lighthouse.owner),
      }}
    >
      {lighthouse.owner}
    </span>
    {!lighthouse.used && ' unused'}
  </div>
)

LighthouseStatus.propTypes = {
  lighthouse: PropTypes.any.isRequired,
}

export default LighthouseStatus
