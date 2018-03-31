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
  handleBuildField,
  disabledBuildField,
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

        {/* farmer */}
        {children.type === 'empty' &&
          !flooded &&
          handleBuildField && (
            <button
              disabled={disabledBuildField}
              onClick={handleBuildField('flax')}
            >
              flax
            </button>
          )}
        {children.type === 'empty' &&
          !flooded &&
          handleBuildField && (
            <button
              disabled={disabledBuildField}
              onClick={handleBuildField('grain')}
            >
              grain
            </button>
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

  handleSetFocus: PropTypes.func, //if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  handleBuildStall: PropTypes.func, // if provided, a button will be put on empty spaces that can take a stall
  handleBuildStable: PropTypes.func, // if provided, stalls have a button that upgrades them to a stable
  handleBuildField: PropTypes.func, // if provided, empty fields have a button that builds a grain and a button for flax field
  disabledBuildField: PropTypes.bool, // must be true, given row and col, for the button to be enabled
}

export default TableauLand
