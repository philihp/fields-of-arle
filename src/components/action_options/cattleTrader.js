import React from 'react'
import PropTypes from 'prop-types'

const CattleTrader = ({ moves }) => {
  const moveCattle = () => moves.option('cattle')
  const moveHorse = () => moves.option('horse')
  return (
    <div>
      You get 2 food, a sheep, and:<br />
      <button onClick={moveCattle}>Cattle</button>
      <button onClick={moveHorse}>Horse</button>
    </div>
  )
}

CattleTrader.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: CattleTrader,
}
