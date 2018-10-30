import React from 'react'
import PropTypes from 'prop-types'

const WinterLaborer = ({ moves }) => {
  const moveBuild = () => moves.option('build')
  const moveImitate = () => moves.option('imitate')
  return (
    <div>
      With the Winter Laborer, you can either build a building or imitate
      another occupied winter action
      <button type="button" onClick={moveBuild}>
        Build
      </button>
      <button type="button" onClick={moveImitate}>
        Imitate
      </button>
    </div>
  )
}

WinterLaborer.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: WinterLaborer,
}
