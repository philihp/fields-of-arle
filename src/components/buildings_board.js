import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './buildings_board.css'
import buildingCosts from '../game/building/cost'

const BuildingClass = [
  'smallHouse1',
  'smallHouse2',
  'smallHouse3',
  'smallHouse4',
  'minorCraftBuilding1',
  'minorCraftBuilding2',
  'majorCraftBuilding1',
  'majorCraftBuilding2',
  'majorCraftBuilding3',
  'majorCraftBuilding4',
  'majorCraftBuilding5',
  'majorCraftBuilding6',
  'innTile1',
  'largeBuilding1',
  'innTile2',
  'largeBuilding2',
  'innTile3',
  'largeBuilding3',
]

const Tooltip = {
  farmersHouse: '1vp, before each november, get 1 clay and may cut peat once',
  plowMakersWorkshop: '1vp, before each november, may place a field',
  novicesHut: '1vp, before each november, get 1 grain and advance 1 dike',
  workshop: '1vp, before each november, get 1 wood, take 1 master action',
  weavingParlor:
    '1vp, at any time, pay 3 flax to get 1 linen and cut peat once',
  colonistsHouse:
    '1vp, at any time, pay 2 woolen to get 1 clay and cut peat once',
  carpentersWorkshop:
    '1vp, at any time, pay 4 food and 1 brick to upgrade a stall to stable',
  schnappsDistillery: '1vp, at any time, pay 1 grain and 1 peat for 3 food',
  loadingStation:
    '1vp, at any time put peat from supply on a single vehicle slot',
  litterStorage:
    '1vp, at any time if you have 2 horses, may exchange 3 flax for 1 horse',
  woodTrader: '1vp, at any time, may exchange 1 timber and 1 food for 2 wood',
  turnery: '5vp, per oven, 1 wood and cut peat twice',
  smokehouse: '5vp, per fish trap, cut peat',
  smithy: '3vp, turn small equipment into plows',
  cooperage:
    '4vp, for 5/10/15 sheep+cattle, 1 grain, flax, wool, hides, and 2 food',
  bakehouse: '4vp, per oven, 2 grain and 1 flax into 8 food',
  mill: '6vp, get 8/10/12 food for having 3/5/6 total fields',
  weavingMill:
    '7vp, get 1 winter wear and move weaving loom up to two spaces forward',
  textileHouse: '9vp, get 1 linen, 1 woolen, 1 leather',
  saddlery: '8vp, cut peat per horse, then move fleshing beam forward once',
  joinery: '6vp, get 2 peat for peat boat, get 1 horse per plow',
  waterfrontHouse:
    '10vp, get 10 food, push 2 dikes, and advance fish trap up to three times.',
  pottersInn: '5vp, get 1 animal per pottery wheel. can be different animals.',
  farmersInn: '3vp, uplace up to 3 fields with forests',
  junkDealersInn:
    '4vp, get 1 hand cart or 1 peat boat. Also, get 1 leather wear and 1 woolen',
  gulfHouseInn:
    '5vp, 1 timber per stall, 1 brick per stable. Double stalls count as two stalls.',
  milkHouseInn: '5vp, get 1 cattle, then cut peat per cattle.',
  sluiceYardInn:
    '4vp, move fish trap forward once, then take 1 wood per fish trap',
  villageChurch: '15vp, get a free carriage',
  lutetsburgCastle:
    '15vp, place a forest tile, then advance spades, pottery wheel, and workbenches once for free',
  berumCastle:
    "15vp, advance ovens and weaving looms for free, then upgrade a tile as if you're the warden.",
}

const BuildingsBoard = ({ buildings, moves, shouldShowBuy, G, ctx }) => {
  const selectBuilding = building => () => {
    moves.option({ building })
  }
  return (
    <div className="BuildingsBoard">
      <div className="smallHouseHeading Heading">
        Small Houses
        {/* <div className="toolTip toolTipLeft">1 building material, 1 grain</div> */}
      </div>
      <div className="minorCraftBuildingHeading Heading">
        Minor Craft Buildings
        {/* <div className="toolTip toolTipLeft">1 timber, 1 brick</div> */}
      </div>
      <div className="majorCraftBuildingHeading Heading">
        Major Craft Buildings
      </div>
      <div className="innTileHeading Heading">
        Inn Tiles
        {/* <div className="toolTip toolTipLeft">
          2 different building materials, 9 food
        </div> */}
      </div>
      <div className="largeBuildingHeading Heading">
        Large Buildings
        {/* <div className="toolTip toolTipRight">3 timber, 3 bricks, 15 food</div> */}
      </div>
      {Array.from(Array(buildings.length), (v, idx) => idx).map(i => {
        return (
          <div
            key={i}
            className={buildings[i] && classNames(BuildingClass[i], 'Building')}
          >
            {buildings[i]}
            <div
              className={classNames({
                toolTip: true,
                toolTipLeft: i % 2 === 0,
                toolTipRight: i % 2 === 1,
              })}
            >
              {Tooltip[buildings[i]]}
            </div>
            {shouldShowBuy &&
              buildingCosts[buildings[i]](G, ctx) && (
                <div>
                  <button onClick={selectBuilding(buildings[i])}>Buy</button>
                </div>
              )}
          </div>
        )
      })}
    </div>
  )
}

BuildingsBoard.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  buildings: PropTypes.array.isRequired,
  shouldShowBuy: PropTypes.bool.isRequired,
  moves: PropTypes.any.isRequired,
}

export default BuildingsBoard
