import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableau_farm'
import TableauBarn from './tableau_barn'
import './tableau.css'

const Tableau = ({ player }) => (
  <div className="Tableau">
    <div className="destinations">[destinations]</div>
    <TableauFarm land={player.land} dikes={player.dikes} />
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

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
}

export default Tableau
