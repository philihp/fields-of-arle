import React from 'react'
import PropTypes from 'prop-types'
import './move_select.css'

const MoveSelect = ({ moves, events, disabled }) => {
  const onClick = () => {
    moves.pass()
    events.endTurn()
  }
  return (
    <button disabled={disabled} onClick={onClick}>
      Next Month
    </button>
  )
}

MoveSelect.propTypes = {
  moves: PropTypes.any.isRequired,
  events: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default MoveSelect
