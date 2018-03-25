import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { findSeaLevel } from '../game/common/land'
import TableauItem from './tableau_item'
import './tableau_land.css'

const TableauLand = ({ land, dikes, focus, handleSetFocus }) => {
  const seaLevel = findSeaLevel(dikes)
  const shouldHandleSetFocus = (item, type, row, col, i) =>
    handleSetFocus && focus === null
      ? handleSetFocus(item, 'land', row, col, i)
      : null
  const shouldDisplay = (type, row, col, i) =>
    !(
      focus &&
      focus.type === type &&
      focus.row === row &&
      focus.col === col &&
      focus.i === i
    )

  return (
    <div className="TableauLand">
      {land.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={[x, y].join('+')}
            className={classNames('land-cell', cell.type, {
              flooded: y < seaLevel,
            })}
            style={{ gridArea: `l${y}${x}` }}
          >
            <b>{cell.type !== 'empty' ? cell.type : ''}</b>
            <div>
              {cell.contents.map((item, i) => {
                return (
                  <TableauItem
                    key={i}
                    i={i}
                    display={shouldDisplay('land', y, x, i)}
                    handleSetFocus={shouldHandleSetFocus(item, 'land', y, x, i)}
                  >
                    {item}
                  </TableauItem>
                )
              })}
            </div>
          </div>
        ))
      )}
      {dikes.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={[x, y].join('+')}
            className={classNames('dike-cell', cell.type, {
              flooded: y < seaLevel,
            })}
            style={{ gridArea: `d${y}${x}` }}
          >
            <div>
              {/* <b>{cell.type !== 'empty' ? cell.type : ''}</b> */}
              {cell.contents.map((item, i) => {
                return (
                  <TableauItem
                    key={i}
                    i={i}
                    display={shouldDisplay('dike', y, x, i)}
                    handleSetFocus={shouldHandleSetFocus(item, 'dike', y, x, i)}
                  >
                    {item}
                  </TableauItem>
                )
              })}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

TableauLand.propTypes = {
  land: PropTypes.array.isRequired,
  dikes: PropTypes.array.isRequired,
  focus: PropTypes.object,
  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
}

export default TableauLand
