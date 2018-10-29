import React from 'react'
import PropTypes from 'prop-types'
import Vehicle from '../vehicle'
import TableauFarm from '../tableauFarm'
import { usableVehicles } from '../../game/common/player'
// import { tokenSize } from '../../game/common/tokens'

class Warden extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  handleWardenFlipFarm = (row, col) => e => {
    this.props.moves.option('farm', row, col)
  }

  handleWardenFlipBarn = space => e => {
    this.props.moves.option('barn', space)
  }

  render() {
    const { G, ctx, moves } = this.props
    const player = G.players[ctx.currentPlayer]
    const vehicles = usableVehicles(player)
    return (
      <div>
        Flip a vehicle
        {vehicles.map(vehicle => (
          <Vehicle
            vehicle={vehicle}
            key={vehicle.space}
            handleWardenFlip={this.handleWardenFlipBarn(vehicle.space)}
          />
        ))}
        or a farm tile
        <TableauFarm
          G={G}
          ctx={ctx}
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          handleWardenFlip={this.handleWardenFlipFarm}
        />
      </div>
    )
  }
}

Warden.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Warden,
}
