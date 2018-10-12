import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TableauItem from './tableauItem'
import buildings, { UnknownBuilding } from './buildings/'
import './tableauLand.css'

const buildingFromType = type => {
  if (buildings[type]) return buildings[type]
  else return null
}

const TableauLand = ({
  G,
  ctx,
  moves,
  children,
  flooded,
  style,
  focusedItemIndex,
  focusedItem,
  handlePlaceBuilding,
  handlePlaceForest,
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

  const Building = buildingFromType(children.type)

  return (
    <div
      style={style}
      className={classNames(
        'TableauLand',
        {
          Building: Building !== null,
          flooded: flooded,
        },
        children.type
      )}
    >
      <div>
        {(Building && (
          <Building type={children.type} G={G} ctx={ctx} moves={moves} />
        )) || <UnknownBuilding type={children.type} />}

        {children.type === 'empty' &&
          !flooded &&
          handleBuildStall && (
            <button type="submit" onClick={handleBuildStall}>
              stall
            </button>
          )}
        {children.type === 'stall' &&
          handleBuildStable && (
            <button type="submit" onClick={handleBuildStable}>
              upgrade
            </button>
          )}

        {/* farmer */}
        {children.type === 'empty' &&
          !flooded &&
          handleBuildField && (
            <button
              type="submit"
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
              type="submit"
              disabled={disabledBuildField}
              onClick={handleBuildField('grain')}
            >
              grain
            </button>
          )}

        {/* builder */}
        {!flooded &&
          children.type === 'empty' &&
          handlePlaceBuilding && (
            <button type="submit" onClick={handlePlaceBuilding}>
              Build
            </button>
          )}

        {/* forester */}
        {!flooded &&
          children.type === 'empty' &&
          handlePlaceForest && (
            <button type="submit" onClick={handlePlaceForest}>
              forest
            </button>
          )}

        <br />
        {children.contents.map((item, i) => (
          <TableauItem
            key={i}
            i={i}
            display={focusedItemIndex !== i}
            handleSetFocus={handleSetFocus && handleSetFocus(i)}
          >
            {item}
          </TableauItem>
        ))}
        {canReceive &&
          handleReleaseFocus && (
            <button type="submit" onClick={handleReleaseFocus}>
              drop
            </button>
          )}
      </div>
    </div>
  )
}

TableauLand.propTypes = {
  G: PropTypes.any,
  ctx: PropTypes.any,
  children: PropTypes.any,
  flooded: PropTypes.bool,
  style: PropTypes.object,
  focusedItemIndex: PropTypes.any,
  focusedItem: PropTypes.string,
  handlePlaceBuilding: PropTypes.func, // if provided, theres a button here that lets you place a building there
  handleSetFocus: PropTypes.func, // if provided, animals will be clickable, which sends them to "floating"
  handleReleaseFocus: PropTypes.func, // if provided, spaces with available space will have buttons to drop whatever the parent has floating
  handleBuildStall: PropTypes.func, // if provided, a button will be put on empty spaces that can take a stall
  handleBuildStable: PropTypes.func, // if provided, stalls have a button that upgrades them to a stable
  handleBuildField: PropTypes.func, // if provided, empty fields have a button that builds a grain and a button for flax field
  disabledBuildField: PropTypes.bool, // must be true, given row and col, for the button to be enabled
}

export default TableauLand
