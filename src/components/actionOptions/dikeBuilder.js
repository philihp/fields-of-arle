import React from 'react'
import PropTypes from 'prop-types'

const DikeBuilder = ({ moves }) => {
  const moveCattle = () => moves.option('cattle')
  const moveSheep = () => moves.option('sheep')
  return (
    <div>
      Take 1 sheep or 1 cattle:
      <br />
      <button onClick={moveCattle}>Cattle</button>
      <button onClick={moveSheep}>Sheep</button>
      <br />
      <br />
      In addition, your dikes will be pushed up per each pair of shovels.
    </div>
  )
}

DikeBuilder.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: DikeBuilder,
}
