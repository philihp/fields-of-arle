import React from 'react'
import PropTypes from 'prop-types'

const Builder = ({ G: { selected }, moves }) => {
  const moveCattle = () => moves.option('cattle')
  const moveHorse = () => moves.option('horse')
  if (
    !(
      selected !== undefined &&
      selected.building !== undefined &&
      selected.col !== undefined &&
      selected.row !== undefined
    )
  ) {
    return null
  } else {
    return <div>How to pay for this?</div>
  }
}

Builder.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Builder
