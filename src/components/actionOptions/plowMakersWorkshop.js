import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from '../tableauFarm'

class PlowMakersWorkshop extends React.Component {
  handlePlowField = (row, col) => crop => e => {
    const { moves } = this.props
    moves.option({
      crop,
      row,
      col,
    })
  }

  handleSkipPlow = e => {
    const { moves } = this.props
    moves.option()
  }

  render() {
    const { G, ctx, moves } = this.props
    const player = G.players[ctx.currentPlayer]
    return (
      <div>
        Plow a field:
        <br />
        <TableauFarm
          G={G}
          ctx={ctx}
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          handleBuildField={this.handlePlowField}
        />
        <br />
        <button type="button" onClick={this.handleSkipPlow}>
          Skip Plow
        </button>
      </div>
    )
  }
}

PlowMakersWorkshop.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: PlowMakersWorkshop,
}
