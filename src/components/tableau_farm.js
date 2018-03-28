import React from 'react'
import PropTypes from 'prop-types'
import { findSeaLevel } from '../game/common/land'
import TableauDike from './tableau_dike'
import TableauLand from './tableau_land'
import './tableau_farm.css'

const TableauFarm = ({
  land,
  dikes,
  focus,
  handleSetFocus,
  handleReleaseFocus,
  handleBuildStall,
  handleBuildStable,
}) => {
  const seaLevel = findSeaLevel(dikes)
  return (
    <div className="TableauFarm">
      {land.map((row, y) =>
        row.map((cell, x) => (
          <TableauLand
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
            handleBuildStall={handleBuildStall && handleBuildStall(y, x)}
            handleBuildStable={handleBuildStable && handleBuildStable(y, x)}
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
  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  handleBuildStall: PropTypes.func, // if provided, a button will be put on empty spaces that can take a stall
  handleBuildStable: PropTypes.func, // if provided, stalls have a button that upgrades them to a stable
}

export default TableauFarm
