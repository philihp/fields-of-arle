import React from 'react'
import PropTypes from 'prop-types'

const visible = ({ selected }) =>
  selected !== undefined &&
  selected.building !== undefined &&
  selected.col !== undefined &&
  selected.row !== undefined

const Builder = ({ G: { selected }, moves }) => {
  const moveCattle = () => moves.option('cattle')
  const moveHorse = () => moves.option('horse')
  return <div>How to pay for this?</div>
}

Builder.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Builder,
}
