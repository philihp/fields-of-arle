import React from 'react'
import PropTypes from 'prop-types'

import { listToKeyedList } from '../game/common/index'

const TableauInventory = ({ inventory, handleLoad }) => (
  <div className="TableauInventory">
    {handleLoad &&
      inventory &&
      listToKeyedList(inventory).map(({ item, key }) => (
        <button
          type="button"
          key={key}
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
