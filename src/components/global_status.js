import CurrentPlayer from './current_player'
import LighthouseStatus from './lighthouse_status'
import React from 'react'
import PropTypes from 'prop-types'

const GlobalStatus = ({ currentPlayer, lighthouse }) => (
  <div>
    <CurrentPlayer currentPlayer={currentPlayer} />
    <LighthouseStatus lighthouse={lighthouse} />
  </div>
)

GlobalStatus.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  lighthouse: PropTypes.any.isRequired,
}

export default GlobalStatus
