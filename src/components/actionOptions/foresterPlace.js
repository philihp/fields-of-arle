import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from '../tableauFarm'

class Forester extends React.Component {
  handlePlaceForest = (row, col) => e => {
    this.props.moves.option({ row, col })
  }

  render() {
    const { G, ctx, moves } = this.props
    const player = G.players[ctx.currentPlayer]
    return (
      <div>
        <TableauFarm
          G={G}
          ctx={ctx}
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          handlePlaceForest={this.handlePlaceForest}
        />
      </div>
    )
  }
}

Forester.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Forester,
}
