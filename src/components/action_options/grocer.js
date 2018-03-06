import React from 'react'
import PropTypes from 'prop-types'

const Grocer = ({ moves }) => {
  const timber = () => {
    console.log("moves.option('timber')")
    moves.option('timber')
  }
  return (
    <div>
      Choose:
      <button onClick={timber}>Timber</button>
      <button>Brick</button>
      <button>Sheep</button>
      <button>Cattle</button>
      <button>Horse</button>
      <br />
      (also you get a grain and a leather)
    </div>
  )
}

Grocer.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default Grocer
