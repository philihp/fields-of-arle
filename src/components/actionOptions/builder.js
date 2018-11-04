import React from 'react'
import PropTypes from 'prop-types'
import BuildingsBoard from '../buildingsBoard'
import TableauFarm from '../tableauFarm'
import costs from '../costs/'

const SelectPayment = () => <div>Select Payment</div>

class Builder extends React.Component {
  handlePlaceBuilding = (row, col) => () => {
    const { moves } = this.props
    moves.option({ col, row })
  }

  render() {
    const {
      G,
      G: { buildings, selected },
      ctx,
      ctx: { currentPlayer },
      moves,
    } = this.props

    if (selected === undefined) {
      return (
        <BuildingsBoard G={G} ctx={ctx} buildings={buildings} moves={moves} />
      )
    }

    const { building, row, col } = selected
    if (building !== undefined && (row === undefined || col === undefined)) {
      const player = G.players[currentPlayer]
      return (
        <TableauFarm
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          handlePlaceBuilding={this.handlePlaceBuilding}
        />
      )
    }

    const {
      players: {
        [currentPlayer]: { inventory, goods },
      },
    } = G
    const BuildingCost = costs[building]
    return (
      <div>
        <BuildingCost inventory={inventory} goods={goods} moves={moves} />
      </div>
    )
  }
}

Builder.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Builder,
}
