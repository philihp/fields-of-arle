import React from 'react'
import PropTypes from 'prop-types'

const animals = ['sheep', 'cattle', 'horse']

const TableauItem = ({ children, handleSetFocus, display }) => {
  const style = {
    display: display ? 'auto' : 'none',
  }
  if (animals.includes(children) && handleSetFocus) {
    return (
      <button
        type="button"
        className="TableauItem animal"
        onClick={handleSetFocus}
        style={style}
      >
        {children}
      </button>
    )
  }
  // what else could this be, except peat? a building?
  return (
    <span className="TableauItem" style={style}>
      {children}
    </span>
  )
}

TableauItem.propTypes = {
  display: PropTypes.bool,
  handleSetFocus: PropTypes.func,
  children: PropTypes.any,
}

TableauItem.defaultProps = {
  display: true,
}

export default TableauItem
