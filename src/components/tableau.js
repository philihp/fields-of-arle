import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableauFarm'
import TableauBarn from './tableauBarn'
import TableauDestinations from './tableauDestinations'
import TableauInventory from './tableauInventory'
import './tableau.css'

class Tableau extends React.Component {
  handleLoadDestination = destination => () => {
    const { moves } = this.props
    moves.load({ destination })
  }

  render() {
    const { player, moves, activePlayer, phase, usedWorkshops } = this.props
    return (
      <div className="Tableau">
        <TableauFarm
          moves={moves}
          land={player.land}
          dikes={player.dikes}
          activePlayer={activePlayer}
          phase={phase}
          usedWorkshops={usedWorkshops || []}
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
  usedWorkshops: PropTypes.array,
  activePlayer: PropTypes.bool,
  phase: PropTypes.string,
}

export default Tableau
