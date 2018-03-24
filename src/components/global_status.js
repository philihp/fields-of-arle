import LighthouseStatus from './lighthouse_status'
import React from 'react'
import PropTypes from 'prop-types'

const GlobalStatus = ({ lighthouse }) => (
  <div style={{ float: 'right', marginTop: '4px', marginRight: '3px' }} />
)

GlobalStatus.propTypes = {
  lighthouse: PropTypes.any.isRequired,
}

export default GlobalStatus
