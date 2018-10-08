import React from 'react'
import PropTypes from 'prop-types'

const visible = ({ loading }) =>
  loading !== undefined &&
  (loading.inventory !== undefined || loading.destination !== undefined) &&
  loading.barnSpace !== undefined

class Load extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  handleSelectSlot = e => {
    this.props.moves.option()
  }

  render() {
    return <div>load</div>
  }
}

Load.propTypes = {
  // G: PropTypes.any,
  // ctx: PropTypes.any,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Load,
}
