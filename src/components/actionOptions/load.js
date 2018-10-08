import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'

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
    const {
      loading: { destination, inventory, barnSpace },
      players,
    } = this.props.G
    const { currentPlayer } = this.props.ctx
    const vehicle = players[currentPlayer].barn[barnSpace]
    return (
      <div>
        Loading:
        {destination && <div>Destination: {destination}</div>}
        {inventory && <div>Item: {inventory}</div>}
        Into:
        <Vehicle vehicle={vehicle} />
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    )
  }
}

Load.propTypes = {
  G: PropTypes.any,
  // ctx: PropTypes.any,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Load,
}
