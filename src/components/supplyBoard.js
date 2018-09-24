import React from 'react'
import PropTypes from 'prop-types'
import './supplyBoard.css'

const SupplyBoard = ({ supplies }) => (
  <div className="SupplyBoard">
    <div>Forest/Park: {supplies.forestPark}</div>
    <div>Stall/Depot: {supplies.stallDepot}</div>
    <div>Stable/Double Stall: {supplies.stableDoubleStall}</div>
    <div>Grain/Flax Field: {supplies.grainFlaxField}</div>
    <div>Cart/Horse Cart: {supplies.cartHorseCart}</div>
    <div>Carriage/Droshky: {supplies.carriageDroshky}</div>
    <div>Handcart/Wagon: {supplies.handcartWagon}</div>
    <div>Peat Boat/Plow: {supplies.peatBoatPlow}</div>
  </div>
)

SupplyBoard.propTypes = {
  supplies: PropTypes.object.isRequired,
}

export default SupplyBoard
