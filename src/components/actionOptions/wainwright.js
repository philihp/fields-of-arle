import React from 'react'
import PropTypes from 'prop-types'
import { afford, spendInventory } from '../../game/common'
import { Vehicles, EquipmentCosts } from '../../game/common/barn'
import { countAnimals } from '../../game/common/player'

class Wainwright extends React.Component {
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
      buyPeatBoat: [],
      buyVehicle: [],
    }
  }

  buyPeatBoat = e => {
    if (!afford(this.state.inventory, EquipmentCosts.peatBoat)) return
    this.setState({
      buyPeatBoat: ['peatBoat'],
      inventory: spendInventory(this.state.inventory, EquipmentCosts.peatBoat),
    })
  }

  buy = type => e => {
    if (!afford(this.state.inventory, EquipmentCosts[type])) return
    this.setState({
      buyVehicle: [type],
      // TODO remove the cattle
      inventory: spendInventory(this.state.inventory, EquipmentCosts[type]),
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.moves.option([
      ...this.state.buyPeatBoat,
      ...this.state.buyVehicle,
    ])
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Buy:
        <br />
        <button
          disabled={
            this.state.buyPeatBoat.length > 0 ||
            !afford(this.state.inventory, EquipmentCosts.peatBoat)
          }
          onClick={this.buyPeatBoat}
        >
          Peat Boat
        </button>
        <br />
        <br />
        and/or Buy:
        <br />
        {Vehicles.map(vehicle => (
          <button
            key={vehicle}
            disabled={
              this.state.buyVehicle.length > 0 ||
              !afford(this.state.inventory, EquipmentCosts[vehicle])
            }
            onClick={this.buy(vehicle)}
          >
            {vehicle}
          </button>
        ))}
        <br />
        <br />
        <input type="submit" value="Done" />
      </form>
    )
  }
}

Wainwright.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Wainwright,
}
