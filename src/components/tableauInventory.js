import React from 'react'
import PropTypes from 'prop-types'

let n = 0
const monotonic = () => {
  n += 1
  return n
}

const TableauInventory = ({ inventory, handleLoad }) => (
  <div className="TableauInventory">
    {inventory &&
      inventory.map(item => (
        <button
          type="button"
          key={`${item}${monotonic()}`}
          disabled={handleLoad == null}
          onClick={handleLoad && handleLoad(item)}
        >
          {item}
        </button>
      ))}
  </div>
)

TableauInventory.propTypes = {
  inventory: PropTypes.array,
  handleLoad: PropTypes.func,
}

export default TableauInventory
