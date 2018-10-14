import React from 'react'
import PropTypes from 'prop-types'

let n = 0
const monotonic = () => {
  n += 1
  return n
}

const TableauInventory = ({ inventory, handleLoad }) => (
  <div className="TableauInventory">
    {handleLoad &&
      inventory &&
      inventory.map(item => (
        <button
          type="button"
          key={`${item}${monotonic()}`}
          disabled={
            handleLoad == null ||
            (item === 'clay' && !inventory.includes('peat')) ||
            item === 'peat'
          }
          onClick={handleLoad && handleLoad(item)}
        >
          {item}
        </button>
      ))}
    {!handleLoad && inventory && inventory.join(', ')}
  </div>
)

TableauInventory.propTypes = {
  inventory: PropTypes.array,
  handleLoad: PropTypes.func,
}

export default TableauInventory
