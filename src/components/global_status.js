import CurrentPlayer from './current_player'
import LighthouseStatus from './lighthouse_status'
import React from 'react'
import PropTypes from 'prop-types'

const GlobalStatus = props => (
  <div>
    <CurrentPlayer currentPlayer={props.currentPlayer} />
    <LighthouseStatus lighthouse={props.lighthouse} />
  </div>
)

GlobalStatus.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  lighthouse: PropTypes.any.isRequired,
}

export default GlobalStatus
