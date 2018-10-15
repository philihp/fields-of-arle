/* eslint-disable react/no-unused-state */

import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'
import { listToKeyedList } from '../../game/common/index'
import { tokenSizes } from '../../game/moves/load'

const visible = () => true

// returns something like...
// [
//   {type: "droshky", contents: [null,null,null], space: "large1",
//   {type: "carriage", contents: [null,null,null], space: "large2",
//   ...
// ]
const usableVehicles = player =>
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

  handleSelectBarnSpace = barnSpace => vehicleOffset => e => {
    this.setState({ barnSpace, vehicleOffset })
  }

  handleCancel = e => {
    this.props.moves.load('cancel')
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    const vehicles = usableVehicles(player)
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
        {vehicles.map(vehicle => (
          <Vehicle
            vehicle={vehicle}
            key={vehicle.space}
            handleLoad={this.handleSelectBarnSpace(vehicle.space)}
            disabled={this.state.barnSpace !== null}
          />
        ))}
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
