import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from '../tableauFarm'

const maxAllowedTilesToReplace = 3

class FarmersInn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
    }
  }

  checkUncheck = (row, col) => () => {
    const index = this.state.checked.findIndex(
      ([checkedRow, checkedCol]) => checkedRow === row && checkedCol === col
    )

    const availableForest = this.props.G.supplies.forestPark

    if (index >= 0) {
      this.setState(prevState => ({
        ...prevState,
        checked: this.state.checked
          .slice(0, index)
          .concat(
            this.state.checked.slice(index + 1, this.state.checked.length)
          ),
      }))
    } else if (
      this.state.checked.length < availableForest &&
      this.state.checked.length < maxAllowedTilesToReplace
    ) {
      this.setState(prevState => ({
        ...prevState,
        checked: [...prevState.checked, [row, col]],
      }))
    }
  }

  checkUncheckDone = () => {
    const { moves } = this.props
    moves.option({ locs: this.state.checked })
  }

  render() {
    const {
      G,
      ctx: { currentPlayer },
      moves,
    } = this.props

    const player = G.players[currentPlayer]
    return (
      <div>
        Number of tiles to select:{' '}
        {maxAllowedTilesToReplace - this.state.checked.length}
        <TableauFarm
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          checkUncheck={this.checkUncheck}
          checkUncheckDone={this.checkUncheckDone}
          checked={this.state.checked}
        />
      </div>
    )
  }
}

FarmersInn.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: FarmersInn,
}
