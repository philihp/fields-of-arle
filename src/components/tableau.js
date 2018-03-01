import React from 'react'
import PropTypes from 'prop-types'
import TableauLand from './tableau_land'
import './tableau.css'

const Tableau = props => (
  <div className="Tableau">
    <div className="Inventory">
      Peat: {props.player.peat}
      <br />
      Wood: {props.player.wood}
      <br />
      Clay: {props.player.clay}
    </div>
    <TableauLand land={props.player.land} />
    <div className="Destinations" />
  </div>
)

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
}

export default Tableau
