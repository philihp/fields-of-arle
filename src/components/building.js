import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import buildingCosts from '../game/building/cost'
import './building.css'

const details = {
  farmersHouse: {
    tooltip: '1vp, before each november, get 1 clay and may cut peat once',
    class: 'smallHouse',
  },
  plowMakersWorkshop: {
    tooltip: '1vp, before each november, may place a field',
    class: 'smallHouse',
  },
  novicesHut: {
    tooltip: '1vp, before each november, get 1 grain and advance 1 dike',
    class: 'smallHouse',
  },
  workshop: {
    tooltip: '1vp, before each november, get 1 wood, take 1 master action',
    class: 'smallHouse',
  },

  weavingParlor: {
    tooltip: '1vp, at any time, pay 3 flax to get 1 linen and cut peat once',
    class: 'smallHouse',
  },
  colonistsHouse: {
    tooltip: '1vp, at any time, pay 2 woolen to get 1 clay and cut peat once',
    class: 'smallHouse',
  },
  carpentersWorkshop: {
    tooltip:
      '1vp, at any time, pay 4 food and 1 brick to upgrade a stall to stable',
    class: 'smallHouse',
  },
  schnappsDistillery: {
    tooltip: '1vp, at any time, pay 1 grain and 1 peat for 3 food',
    class: 'smallHouse',
  },
  loadingStation: {
    tooltip: '1vp, at any time put peat from supply on a single vehicle slot',
    class: 'smallHouse',
  },
  litterStorage: {
    tooltip:
      '1vp, at any time if you have 2 horses, may exchange 3 flax for 1 horse',
    class: 'smallHouse',
  },
  woodTrader: {
    tooltip: '1vp, at any time, may exchange 1 timber and 1 food for 2 wood',
    class: 'smallHouse',
  },

  turnery: {
    tooltip: '5vp, per oven, 1 wood and cut peat twice',
    class: 'minorCraftBuilding',
  },
  smokehouse: {
    tooltip: '5vp, per fish trap, cut peat',
    class: 'minorCraftBuilding',
  },
  smithy: {
    tooltip: '3vp, turn small equipment into plows',
    class: 'minorCraftBuilding',
  },
  cooperage: {
    tooltip:
      '4vp, for 5/10/15 sheep+cattle, 1 grain, flax, wool, hides, and 2 food',
    class: 'minorCraftBuilding',
  },
  bakehouse: {
    tooltip: '4vp, per oven, 2 grain and 1 flax into 8 food',
    class: 'minorCraftBuilding',
  },

  mill: {
    tooltip: '6vp, get 8/10/12 food for having 3/5/6 total fields',
    class: 'majorCraftBuilding',
  },
  weavingMill: {
    tooltip:
      '7vp, get 1 winter wear and move weaving loom up to two spaces forward',
    class: 'majorCraftBuilding',
  },
  textileHouse: {
    tooltip: '9vp, get 1 linen, 1 woolen, 1 leather',
    class: 'majorCraftBuilding',
  },
  saddlery: {
    tooltip: '8vp, cut peat per horse, then move fleshing beam forward once',
    class: 'majorCraftBuilding',
  },
  joinery: {
    tooltip: '6vp, get 2 peat for peat boat, get 1 horse per plow',
    class: 'majorCraftBuilding',
  },
  waterfrontHouse: {
    tooltip:
      '10vp, get 10 food, push 2 dikes, and advance fish trap up to three times.',
    class: 'majorCraftBuilding',
  },

  pottersInn: {
    tooltip: '5vp, get 1 animal per pottery wheel. can be different animals.',
    class: 'innTile',
  },
  farmersInn: {
    tooltip: '3vp, uplace up to 3 fields with forests',
    class: 'innTile',
  },
  junkDealersInn: {
    tooltip:
      '4vp, get 1 hand cart or 1 peat boat. Also, get 1 leather wear and 1 woolen',
    class: 'innTile',
  },
  gulfHouseInn: {
    tooltip:
      '5vp, 1 timber per stall, 1 brick per stable. Double stalls count as two stalls.',
    class: 'innTile',
  },
  milkHouseInn: {
    tooltip: '5vp, get 1 cattle, then cut peat per cattle.',
    class: 'innTile',
  },
  sluiceYardInn: {
    tooltip: '4vp, move fish trap forward once, then take 1 wood per fish trap',
    class: 'innTile',
  },

  villageChurch: {
    tooltip: '15vp, get a free carriage',
    class: 'largeBuilding',
  },
  lutetsburgCastle: {
    tooltip:
      '15vp, place a forest tile, then advance spades, pottery wheel, and workbenches once for free',
    class: 'largeBuilding',
  },
  berumCastle: {
    tooltip:
      "15vp, advance ovens and weaving looms for free, then upgrade a tile as if you're the warden.",
    class: 'largeBuilding',
  },
}

const Building = ({ G, ctx, building, shouldShowBuy, moves }) => {
  const selectBuilding = () => {
    moves.option({ building })
  }
  return (
    <div
      className={building && classNames(details[building].class, 'Building')}
    >
      {building}
      <div
        className={classNames({
          toolTip: true,
          toolTipLeft: true, // i % 2 === 0,
          toolTipRight: false, // i % 2 === 1,
        })}
      >
        {details[building].tooltip}
      </div>
      {shouldShowBuy &&
        buildingCosts[building](G, ctx) && (
          <div>
            <button onClick={selectBuilding}>Buy</button>
          </div>
        )}
    </div>
  )
}

Building.propTypes = {
  building: PropTypes.string.isRequired,
  G: PropTypes.any,
  ctx: PropTypes.any,
  shouldShowBuy: PropTypes.bool,
  shouldShowTooltip: PropTypes.bool,
  moves: PropTypes.any.isRequired,
}

Building.defaultTypes = {
  shouldShowBuy: false,
  shouldShowTooltip: false,
}

export default Building
