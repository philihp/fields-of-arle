import React from 'react'
import PropTypes from 'prop-types'
import './move_select.css'


const MoveSelect = props => {
  const onClick = () => {
    props.moves.pass()
    props.events.endTurn()
  }
  return (
    <button disabled={props.disabled} onClick={onClick}>
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
