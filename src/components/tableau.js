import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableauFarm'
import TableauBarn from './tableauBarn'
import './tableau.css'

const Tableau = ({ player, moves, shouldShowPlace }) => {
  const handlePlaceBuilding = (row, col) => () => {
    moves.option({ col, row })
  }
  return (
    <div className="Tableau">
      <div className="destinations">[destinations]</div>
      <TableauFarm
        land={player.land}
        dikes={player.dikes}
        handlePlaceBuilding={shouldShowPlace ? handlePlaceBuilding : null}
      />
      <div className="goods">
        <div>[goods: {JSON.stringify(player.goods)}]</div>
      </div>
      <div className="inventory">
        <div>
          {player.tokens.length > 0 && 'Limbo: '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {player.tokens.join(', ')}
          </span>
        </div>
        <div>[inventory: {player.inventory.join(', ')}]</div>
      </div>
      <TableauBarn barn={player.barn} />
    </div>
  )
}

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  shouldShowPlace: PropTypes.bool.isRequired,
}

export default Tableau
