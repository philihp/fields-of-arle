import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'
import { EquipmentCosts, countVehicle } from '../../game/common/barn'
import { countAnimals } from '../../game/common/player'
import TableauFarm from '../tableauFarm'

class Farmer extends React.Component {
  constructor(props) {
    super(props)
    const { G, ctx } = props
    const { sheep, cattle, horses } = countAnimals(G.players[ctx.currentPlayer])
    this.state = {
      inventory: [
        ...G.players[ctx.currentPlayer].inventory,
        ...Array(sheep).fill('sheep'),
        ...Array(cattle).fill('cattle'),
        ...Array(horses).fill('horse'),
      ],
      unusedPlows: countVehicle(G.players[ctx.currentPlayer].barn, 'plow'),
      buyPlow: null,
      plowFields: [],
    }
  }

  handleBuyPlow = withAnimal => e => {
    if (!afford(this.state.inventory, EquipmentCosts.plow[withAnimal])) return
    this.setState({
      buyPlow: withAnimal,
      unusedPlows: this.state.unusedPlows + 1,
    })
  }

  handlePlowField = (row, col) => crop => e => {
    if (this.disabledBuildField(row, col)) return
    this.setState({
      plowFields: [...this.state.plowFields, { crop, row, col }],
      unusedPlows: this.state.unusedPlows - 1,
    })
  }

  disabledBuildField = (row, col) =>
    this.state.unusedPlows === 0 ||
    this.props.G.supplies.grainFlaxField === 0 ||
    this.state.plowFields.find(
      field => field.row === row && field.col === col
    ) !== undefined

  handleSubmit = e => {
    e.preventDefault()
    this.props.moves.option({
      buyPlow: this.state.buyPlow,
      plowFields: this.state.plowFields,
    })
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    return (
      <form onSubmit={this.handleSubmit}>
        INV: {this.state.inventory.join(',')}
        <br />
        <button
          type="button"
          disabled={
            this.state.buyPlow ||
            !afford(this.state.inventory, EquipmentCosts.plow.horse) ||
            G.supplies.peatBoatPlow === 0
          }
          onClick={this.handleBuyPlow('horse')}
        >
          Buy Plow with horse
        </button>
        <button
          type="button"
          disabled={
            this.state.buyPlow ||
            !afford(this.state.inventory, EquipmentCosts.plow.cattle) ||
            G.supplies.peatBoatPlow === 0
          }
          onClick={this.handleBuyPlow('cattle')}
        >
          Buy Plow with cattle
        </button>
        <br />
        <br />
        and/or Plow {this.state.unusedPlows} fields:
        <br />
        <TableauFarm
          land={player.land}
          dikes={player.dikes}
          handleBuildField={this.handlePlowField}
          disabledBuildField={this.disabledBuildField}
        />
        <br />
        <input type="submit" value="Done" />
      </form>
    )
  }
}

Farmer.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Farmer,
}
