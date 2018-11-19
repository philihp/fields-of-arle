/* eslint-disable react/no-unused-state */

import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'
import { sellableAtDestination, usableVehicles } from '../../game/common/player'

const visible = () => true

class Smithy extends React.Component {
  constructor(props) {
    super()
    this.state = {
      spacesToConvert: [],
    }
  }

  handleSelectBarnSpace = barnSpace => e => {
    this.setState({
      spacesToConvert: [...this.state.spacesToConvert, barnSpace],
    })
  }

  handleConvert = e => {
    this.props.moves.option(this.state.spacesToConvert)
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    const vehicles = usableVehicles(player)
    return (
      <div>
        <b>Smithy</b>
        <br />
        Pick 1 Vehicle:
        <br />
        {vehicles.map(vehicle => (
          <Vehicle
            vehicle={vehicle}
            key={vehicle.space}
            // TODO: should only show empty handcarts and wagons, per https://boardgamegeek.com/article/18173330#18173330
            disabled={this.state.spacesToConvert.includes(vehicle.space)}
            handleSmithyConvert={this.handleSelectBarnSpace(vehicle.space)}
          />
        ))}
        <hr />
        <button type="button" onClick={this.handleConvert}>
          Convert Vehicles
        </button>
      </div>
    )
  }
}

Smithy.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Smithy,
}
