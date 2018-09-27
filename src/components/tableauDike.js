import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TableauItem from './tableauItem'
import './tableauDike.css'

const TableauDike = ({
  children,
  flooded,
  style,
  focusedItemIndex,
  handleSetFocus,
  handleReleaseFocus,
}) => (
  <div
    style={style}
    className={classNames('TableauDike', children.type, {
      flooded: flooded,
    })}
  >
    <div>
      {children.contents.map((item, i) => (
        <TableauItem
          key={item}
          i={i}
          display={focusedItemIndex !== i}
          handleSetFocus={handleSetFocus && handleSetFocus(i)}
        >
          {item}
        </TableauItem>
      ))}
      {children.type === 'dike' &&
        children.contents.length === 0 &&
        handleReleaseFocus && (
          <button type="submit" onClick={handleReleaseFocus}>
            drop
          </button>
        )}
    </div>
  </div>
)

TableauDike.propTypes = {
  style: PropTypes.object,
  focusedItemIndex: PropTypes.any,
  handleSetFocus: PropTypes.func, // if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  children: PropTypes.any,
  flooded: PropTypes.bool.isRequired,
}

export default TableauDike
