import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableau_farm'
import './tableau.css'

const Tableau = ({ player }) => (
  <div className="Tableau">
    <TableauFarm land={player.land} dikes={player.dikes} />
    <div className="Tokens">
      <div>
        {player.tokens.length > 0 && 'Limbo: '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {player.tokens.join(', ')}
        </span>
      </div>
      <div>Inventory: {player.inventory.join(', ')}</div>
    </div>
    <hr />
    <div className="Goods">
      <div>Food: {player.goods.food}</div>
      <div>Wool: {player.goods.wool}</div>
      <div>Flax: {player.goods.flax}</div>
      <div>Hides: {player.goods.hides}</div>
      <div>Grain: {player.goods.grain}</div>
    </div>
    <div className="Destinations" />
  </div>
)

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
}

export default Tableau
