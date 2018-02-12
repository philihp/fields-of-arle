import React from 'react'
import PropTypes from 'prop-types'

const color = (worker) => {
  switch (worker) {
    case 0:
      return '#e64505'
    case 1:
      return '#c7a200'
    default:
      return 'red'
  }
}


const CurrentPlayer = props => (
  <div style={{ display: 'inline-block' }}>
    Current Player&nbsp;
    <span style={{fontWeight: 'bold', color: color(props.currentPlayer)}}>{props.currentPlayer}</span>&nbsp;
  </div>
)

CurrentPlayer.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
}

export default CurrentPlayer
