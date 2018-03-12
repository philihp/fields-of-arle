import React from 'react'
import PropTypes from 'prop-types'
import './tableau_land.css'

const TableauLand = ({ land }) => {
  return (
    <div className="TableauLand">
      {land.map((row, y) =>
        row.map((cell, x) => (
          <div key={[x, y].join('+')}>
            {cell && (
              <div>
                <b>{cell.type}</b>
                <div>
                  {cell.contents.map((item, i) => <span key={i}>{item}</span>)}
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

TableauLand.propTypes = {
  land: PropTypes.array.isRequired,
}

export default TableauLand
