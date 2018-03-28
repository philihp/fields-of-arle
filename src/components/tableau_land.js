import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TableauItem from './tableau_item'
import './tableau_land.css'

const TableauLand = ({
  children,
  flooded,
  style,
  focusedItemIndex,
  focusedItem,
  handleSetFocus,
  handleReleaseFocus,
  handleBuildStall,
  handleBuildStable,
}) => {
  const canReceive =
    (children.type === 'empty' &&
      flooded === false &&
      (children.contents.length === 0 ||
        (children.contents.length < 2 &&
          children.contents[0] === focusedItem))) ||
    (children.type === 'stall' &&
      (children.contents.length === 0 ||
        (children.contents.length < 3 &&
          children.contents[0] === focusedItem))) ||
    (children.type === 'stable' &&
      (children.contents.length === 0 ||
        (children.contents.length < 6 &&
          children.contents[0] === focusedItem))) ||
    (children.type === 'park' && children.contents.length < 2)

  return (
    <div
      style={style}
      className={classNames('TableauLand', children.type, {
        flooded: flooded,
      })}
    >
      <div>
        <b>{children.type !== 'empty' && children.type}</b>

        {children.type === 'empty' &&
          !flooded &&
          handleBuildStall && <button onClick={handleBuildStall}>stall</button>}
        {children.type === 'stall' &&
          handleBuildStable && (
            <button onClick={handleBuildStable}>upgrade</button>
          )}

        <br />
        {children.contents.map((item, i) => {
          return (
            <TableauItem
              key={i}
              i={i}
              display={focusedItemIndex !== i}
              handleSetFocus={handleSetFocus && handleSetFocus(i)}
            >
              {item}
            </TableauItem>
          )
        })}
        {canReceive &&
          handleReleaseFocus && (
            <button onClick={handleReleaseFocus}>drop</button>
          )}
      </div>
    </div>
  )
}

TableauLand.propTypes = {
  style: PropTypes.object,
  focusedItemIndex: PropTypes.any,
  focusedItem: PropTypes.string,

  focus: PropTypes.object,
  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  handleBuildStall: PropTypes.func, // if provided, a button will be put on empty spaces that can take a stall
  handleBuildStable: PropTypes.func, // if provided, stalls have a button that upgrades them to a stable
}

export default TableauLand
