import React from 'react'
import PropTypes from 'prop-types'

const Grocer = ({ moves }) => {
  const moveTimber = () => moves.option('timber')
  const moveBrick = () => moves.option('brick')
  const moveSheep = () => moves.option('sheep')
  const moveCattle = () => moves.option('cattle')
  const moveHorse = () => moves.option('horse')
  return (
    <div>
      Choose:
      <button type="button" onClick={moveTimber}>
        Timber
      </button>
      <button type="button" onClick={moveBrick}>
        Brick
      </button>
      <button type="button" onClick={moveSheep}>
        Sheep
      </button>
      <button type="button" onClick={moveCattle}>
        Cattle
      </button>
      <button type="button" onClick={moveHorse}>
        Horse
      </button>
      <br />
      (also you get a grain and a leather)
    </div>
  )
}

Grocer.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Grocer,
}
