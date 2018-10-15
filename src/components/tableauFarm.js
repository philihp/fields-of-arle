import React from 'react'
import PropTypes from 'prop-types'
import { findSeaLevel } from '../game/common/land'
import TableauDike from './tableauDike'
import TableauLand from './tableauLand'
import './tableauFarm.css'

const TableauFarm = ({
  activePlayer,
  phase,
  usedWorkshops,
  moves,
  land,
  dikes,
  focus,
  handleSetFocus,
  handleReleaseFocus,
  handlePlaceBuilding,
  handlePlaceForest,
  handleBuildStall,
  handleBuildStable,
  handleBuildField,
  disabledBuildField,
}) => {
  const seaLevel = findSeaLevel(dikes)
  return (
    <div className="TableauFarm">
      {land.map((row, y) =>
        row.map((cell, x) => (
          <TableauLand
            activePlayer={activePlayer}
            phase={phase}
            usedWorkshops={usedWorkshops}
            moves={moves}
            key={[x, y].join('+')}
            style={{ gridArea: `l${y}${x}` }}
            flooded={y < seaLevel}
            focusedItem={focus && focus.item}
            focusedItemIndex={
              focus &&
              focus.type === 'land' &&
              focus.row === y &&
              focus.col === x &&
              focus.i
            }
            handleReleaseFocus={
              handleReleaseFocus && handleReleaseFocus('land', y, x)
            }
            handleSetFocus={handleSetFocus && handleSetFocus('land', y, x)}
            handlePlaceBuilding={
              handlePlaceBuilding && handlePlaceBuilding(y, x)
            }
            handlePlaceForest={handlePlaceForest && handlePlaceForest(y, x)}
            handleBuildStall={handleBuildStall && handleBuildStall(y, x)}
            handleBuildStable={handleBuildStable && handleBuildStable(y, x)}
            handleBuildField={handleBuildField && handleBuildField(y, x)}
            disabledBuildField={disabledBuildField && disabledBuildField(y, x)}
          >
            {cell}
          </TableauLand>
        ))
      )}
      {dikes.map((row, y) =>
        row.map((cell, x) => (
          <TableauDike
            key={[x, y].join('+')}
            style={{ gridArea: `d${y}${x}` }}
            flooded={y < seaLevel}
            focusedItemIndex={
              focus &&
              focus.type === 'dikes' &&
              focus.row === y &&
              focus.col === x &&
              focus.i
            }
            handleReleaseFocus={
              handleReleaseFocus && handleReleaseFocus('dikes', y, x)
            }
            handleSetFocus={handleSetFocus && handleSetFocus('dikes', y, x)}
          >
            {cell}
          </TableauDike>
        ))
      )}
    </div>
  )
}

TableauFarm.propTypes = {
  land: PropTypes.array.isRequired,
  dikes: PropTypes.array.isRequired,
  focus: PropTypes.object,
  handlePlaceBuilding: PropTypes.func,
  handlePlaceForest: PropTypes.func,
  handleSetFocus: PropTypes.func, // if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  handleBuildStall: PropTypes.func, // if provided, a button will be put on empty spaces that can take a stall
  handleBuildStable: PropTypes.func, // if provided, stalls have a button that upgrades them to a stable
  handleBuildField: PropTypes.func, // if provided, empty fields have a button that builds a grain and a button for flax field
  disabledBuildField: PropTypes.func, // must be true, given row and col, for the button to be enabled
  usedWorkshops: PropTypes.array,
  activePlayer: PropTypes.bool,
  phase: PropTypes.string,
}

export default TableauFarm
