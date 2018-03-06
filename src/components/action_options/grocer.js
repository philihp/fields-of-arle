import React from 'react'
import PropTypes from 'prop-types'

const Grocer = ({ moves }) => {
  return (
    <div>
      Choose:
      <button onClick={() => moves.option('timber')}>Timber</button>
      <button onClick={() => moves.option('brick')}>Brick</button>
      <button onClick={() => moves.option('sheep')}>Sheep</button>
      <button onClick={() => moves.option('cattle')}>Cattle</button>
      <button onClick={() => moves.option('horse')}>Horse</button>
      <br />
      (also you get a grain and a leather)
    </div>
  )
}

Grocer.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default Grocer
