/* eslint-disable react/no-unused-state */

import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'
import { listToKeyedList, remove } from '../../game/common/index'
import { tokenSizes, destinationInputs } from '../../game/moves/load'
import { sellableAtDestination, usableVehicles } from '../../game/common/player'
import { tokenSize } from '../../game/common/tokens'
import { destinationSize } from '../../game/destinations/index'
import Destinations from '../destinations/index'
import './load.css'

const visible = () => true

class Load extends React.Component {
  constructor(props) {
    super()
    this.state = {
      token: null,
      barnSpace: null,
      vehicleOffset: null,
      inventory: [],
      conversionInputs: [],
    }
  }

  handleSelectInventory = token => e => {
    this.setState({ token })
  }

  handleSelectDestination = token => e => {
    const { G, ctx } = this.props
    this.setState({
      token,
      conversionInputs: destinationInputs[token],
      inventory: sellableAtDestination(G.players[ctx.currentPlayer]),
    })
  }

  handleSelectBarnSpace = barnSpace => vehicleOffset => e => {
    this.setState({ barnSpace, vehicleOffset })
  }

  handleCancel = e => {
    this.props.moves.load('cancel')
  }

  handleLoad = e => {
    this.props.moves.load({
      token: this.state.token,
      barnSpace: this.state.barnSpace,
      vehicleOffset: this.state.vehicleOffset,
      conversionInputs: this.state.conversionInputs,
    })
  }

  handleSellAtDestination = (offset, ...withParameters) => e => {
    this.setState({
      inventory: remove(...withParameters)(this.state.inventory),
      conversionInputs: [
        ...this.state.conversionInputs.slice(0, offset),
        withParameters,
        ...this.state.conversionInputs.slice(offset + 1),
      ],
    })
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    const vehicles = usableVehicles(player)
    const DestinationMarket = Destinations[this.state.token]
    return (
      <div>
        <b>Loading</b>
        <br />
        Pick 1 Tile:
        <br />
        {listToKeyedList(player.inventory).map(({ item, key }) => (
          <button
            type="button"
            key={key}
            onClick={this.handleSelectInventory(item)}
            disabled={
              this.state.token !== null ||
              item === 'peat' ||
              (item === 'clay' && !player.inventory.includes('peat'))
            }
            className={`tile-width-${tokenSize(item)}`}
          >
            {item}
          </button>
        ))}
        {player.destinations.map(destination => (
          <button
            type="button"
            key={destination}
            onClick={this.handleSelectDestination(destination)}
            disabled={this.state.token !== null}
            className={`tile-width-${destinationSize(destination)}`}
          >
            {destination}
          </button>
        ))}
        <br />
        Pick 1 Vehicle:
        <br />
        {vehicles.map(vehicle => (
          <Vehicle
            vehicle={vehicle}
            key={vehicle.space}
            handleLoad={this.handleSelectBarnSpace(vehicle.space)}
            tokenSize={tokenSizes[this.state.token]}
            disabled={
              this.state.token === null || this.state.barnSpace !== null
            }
          />
        ))}
        {this.state.conversionInputs.length !== 0 && (
          <DestinationMarket
            conversionInputs={this.state.conversionInputs}
            inventory={this.state.inventory}
            handleSellAtDestination={this.handleSellAtDestination}
          />
        )}
        <hr />
        <button type="button" onClick={this.handleCancel}>
          Nevermind...
        </button>
        <button
          type="button"
          disabled={
            this.state.token === null ||
            this.state.barnSpace === null ||
            (this.state.conversionInputs.length !== 0 &&
              this.state.conversionInputs.every(i => i === null))
          }
          onClick={this.handleLoad}
        >
          Load Vehicle!
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
