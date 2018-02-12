import CurrentPlayer from './current_player'
import LighthouseStatus from './lighthouse_status'
import React from 'react'
import PropTypes from 'prop-types'

export default class GlobalStatus extends React.Component {
  static propTypes = {
    currentPlayer: PropTypes.number.isRequired,
    lighthouse: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div>
        <CurrentPlayer currentPlayer={this.props.currentPlayer} />
        <LighthouseStatus lighthouse={this.props.lighthouse} />
      </div>
    )
  }
}
