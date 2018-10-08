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

  handleCancel = e => {
    this.props.moves.load('cancel')
  }

  render() {
    return (
      <div>
        load
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    )
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
