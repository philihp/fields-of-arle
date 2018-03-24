import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { dikeLevel } from '../game/common/land'
import './tableau_land.css'

const TableauLand = ({ land, dikes }) => {
  const seaLevel = dikeLevel(dikes)

  return (
    <div className="TableauLand">
      DikeLevel: {seaLevel}
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
              {cell.contents.map((item, i) => <span key={i}>{item}</span>)}
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
              <b>{cell.type !== 'empty' ? cell.type : ''}</b>
              {cell.contents.map((item, i) => <span key={i}>{item}</span>)}
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
}

export default TableauLand
