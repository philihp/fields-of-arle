import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableauFarm'
import TableauBarn from './tableauBarn'
import TableauDestinations from './tableauDestinations'
import TableauInventory from './tableauInventory'
import './tableau.css'

class Tableau extends React.Component {
  handlePlaceBuilding = (row, col) => () => {
    const { moves } = this.props
    moves.option({ col, row })
  }

  handleLoadDestination = destination => () => {
    const { moves } = this.props
    moves.load({ destination })
  }

  render() {
    const { G, ctx, player, moves, shouldShowPlace } = this.props
    return (
      <div className="Tableau">
        <TableauFarm
          G={G}
          ctx={ctx}
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          handlePlaceBuilding={
            shouldShowPlace ? this.handlePlaceBuilding : null
          }
        />
        <TableauDestinations destinations={player.destinations} />
        <div className="goods">{JSON.stringify(player.goods)}</div>
        <div className="inventory">
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {player.tokens.join(', ')}
          </span>
        </div>
        <TableauInventory inventory={player.inventory} />
        <TableauBarn barn={player.barn} />
      </div>
    )
  }
}

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  shouldShowPlace: PropTypes.bool.isRequired,
}

export default Tableau
