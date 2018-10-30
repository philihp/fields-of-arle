import React from 'react'
import PropTypes from 'prop-types'

const SummerLaborer = ({ moves }) => {
  const moveBuild = () => moves.option('build')
  const moveImitate = () => moves.option('imitate')
  return (
    <div>
      With the Summer Laborer, you can either build a vehicle or imitate another
      occupied summer action
      <button type="button" onClick={moveBuild}>
        Build
      </button>
      <button type="button" onClick={moveImitate}>
        Imitate
      </button>
    </div>
  )
}

SummerLaborer.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: SummerLaborer,
}
