import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './tableau_land.css'

const TableauLand = ({ land, dikes }) => {
  return (
    <div className="TableauLand">
      {land.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={[x, y].join('+')}
            className={classNames('land-cell', cell.type)}
            style={{ gridArea: `l${y}${x}` }}
          >
            <b>{cell.type}</b>
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
            className={classNames('dike-cell', cell.type)}
            style={{ gridArea: `d${y}${x}` }}
          >
            <div>
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
