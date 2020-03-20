import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'
import { Vehicles, EquipmentCosts } from '../../game/common/barn'
import { countAnimals } from '../../game/common/player'

class SummerLaborBuild extends React.Component {
  handleBuild = vehicle => e => {
    this.props.moves.option([vehicle])
  }

  render() {
    const { G, ctx } = this.props
    const { sheep, cattle, horses } = countAnimals(G.players[ctx.currentPlayer])
    const inventory = [
      ...G.players[ctx.currentPlayer].inventory,
      ...Array(sheep).fill('sheep'),
      ...Array(cattle).fill('cattle'),
      ...Array(horses).fill('horse'),
    ]
    return (
      <div>
        Buy:
        {Vehicles.map(vehicle => (
          <button
            key={vehicle}
            disabled={!afford(inventory, EquipmentCosts[vehicle])}
            type="button"
            onClick={this.handleBuild(vehicle)}
          >
            {vehicle}
          </button>
        ))}
      </div>
    )
  }
}

SummerLaborBuild.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: SummerLaborBuild,
}
