import React from 'react'
import PropTypes from 'prop-types'
import BuildingsBoard from '../buildingsBoard'
import TableauFarm from '../tableauFarm'
import costs from '../costs/'

const SelectPayment = () => <div>Select Payment</div>

class Builder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
    }
  }

  handlePlaceBuilding = (row, col) => () => {
    const { moves } = this.props
    moves.option({ col, row })
  }

  checkUncheck = (row, col) => () => {
    if (
      this.state.checked.some(
        ([checkedRow, checkedCol]) => checkedRow === row && checkedCol === col
      )
    ) {
      const index = this.state.checked.findIndex(
        ([checkedRow, checkedCol]) => checkedRow === row && checkedCol === col
      )
      this.setState(prevState => ({
        ...prevState,
        checked: this.state.checked
          .slice(0, index)
          .concat(
            this.state.checked.slice(index + 1, this.state.checked.length)
          ),
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        checked: [...prevState.checked, [row, col]],
      }))
    }
  }

  checkUncheckDone = () => {
    const { moves } = this.props
    moves.option({ immediate_action: this.state.checked })
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

    const { building, row, col, cost } = selected
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

    if (
      building !== undefined &&
      row !== undefined &&
      col !== undefined &&
      cost === undefined
    ) {
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

    const player = G.players[currentPlayer]
    return (
      <TableauFarm
        moves={moves}
        land={player.land}
        dikes={player.dikes}
        checkUncheck={this.checkUncheck}
        checkUncheckDone={this.checkUncheckDone}
        checked={this.state.checked}
      />
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
