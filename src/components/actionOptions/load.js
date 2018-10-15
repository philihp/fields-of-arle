/* eslint-disable react/no-unused-state */

import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'
import { listToKeyedList } from '../../game/common/index'

const visible = () => true

// returns something like...
// [
//   {type: "droshky", contents: [null,null,null], space: "large1",
//   {type: "carriage", contents: [null,null,null], space: "large2",
//   ...
// ]
const vehicles = player =>
  Object.entries(player.barn)
    // remove any spaces with nothing in the parked spot
    .filter(([space, parked]) => parked !== null)
    // map the key/name of the space into the vehicle itself
    .map(([space, val]) => ({ ...val, space }))

class Load extends React.Component {
  constructor(props) {
    super()
    this.state = {
      token: null,
      barnSpace: null,
      vehicleOffset: null,
    }
  }

  handleSelectToken = token => e => {
    this.setState({ token })
  }

  handleCancel = e => {
    this.props.moves.load('cancel')
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    return (
      <div>
        <b>Loading</b>
        <br />
        Load{' '}
        {listToKeyedList(player.inventory).map(({ item, key }) => (
          <button
            type="button"
            key={key}
            onClick={this.handleSelectToken(item)}
            disabled={
              this.state.token !== null ||
              item === 'peat' ||
              (item === 'clay' && !player.inventory.includes('peat'))
            }
          >
            {item}
          </button>
        ))}
        <br />
        {player.destinations.map(destination => (
          <button
            type="button"
            key={destination}
            onClick={this.handleSelectToken(destination)}
            disabled={this.state.token !== null}
          >
            {destination}
          </button>
        ))}
        <br />
        into
        <br />
        {JSON.stringify(vehicles(player))}
        <hr />
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    )
  }
}

Load.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Load,
}
