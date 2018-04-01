import React from 'react'
import PropTypes from 'prop-types'
import './buildings_board.css'

const BuildingsBoard = ({ buildings }) => (
  <div className="BuildingsBoard">
    <heading className="smallHouseHeading">Small Houses</heading>
    <div className="smallHouse1 Building">{buildings[0]}</div>
    <div className="smallHouse2 Building">{buildings[1]}</div>
    <div className="smallHouse3 Building">{buildings[2]}</div>
    <div className="smallHouse4 Building">{buildings[3]}</div>
    <heading className="minorCraftBuildingHeading">
      Minor Craft Buildings
    </heading>
    <div className="minorCraftBuilding1 Building">{buildings[4]}</div>
    <div className="minorCraftBuilding2 Building">{buildings[5]}</div>
    <div className="minorCraftBuilding3 Building">{buildings[6]}</div>
    <div className="minorCraftBuilding4 Building">{buildings[7]}</div>
    <heading className="majorCraftBuildingHeading">
      Major Craft Buildings
    </heading>
    <div className="majorCraftBuilding1 Building">{buildings[8]}</div>
    <div className="majorCraftBuilding2 Building">{buildings[9]}</div>
    <div className="majorCraftBuilding3 Building">{buildings[10]}</div>
    <div className="majorCraftBuilding4 Building">{buildings[11]}</div>
    <heading className="innTileHeading">Inn Tiles</heading>
    <div className="innTile1 Building">{buildings[12]}</div>
    <div className="innTile2 Building">{buildings[13]}</div>
    <div className="innTile3 Building">{buildings[14]}</div>
    <heading className="largeBuildingHeading">Large Buildings</heading>
    <div className="largeBuilding1 Building">{buildings[15]}</div>
    <div className="largeBuilding2 Building">{buildings[16]}</div>
    <div className="largeBuilding3 Building">{buildings[17]}</div>
  </div>
)

BuildingsBoard.propTypes = {
  buildings: PropTypes.array.isRequired,
}

export default BuildingsBoard
