import React from 'react'
import PropTypes from 'prop-types'
import TableauLand from './tableau_land'
import './tableau.css'

const Tableau = ({ player }) => (
  <div className="Tableau">
    <div className="Tokens">
      <div>Floating: {player.tokens.join(', ')}</div>
      <div>Peat: {player.peat}</div>
      <div>Wood: {player.wood}</div>
      <div>Clay: {player.clay}</div>
    </div>
    <div className="FloatingInventory" />
    <TableauLand land={player.land} />
    <div className="Goods">
      <div> Food: {player.goods.food}</div>
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
