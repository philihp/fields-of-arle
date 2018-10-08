import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './tableauBarnSpace.css'

const TableauBarnSpace = ({ space, className, handleLoad }) => (
  <div className={classNames('TableauBarnSpace', className)}>
    {space && (
      <div>
        <b>{space.type}</b>
        {handleLoad && (
          <button type="button" onClick={handleLoad}>
            Load
          </button>
        )}
        <br />
        {space.contents}
      </div>
    )}
  </div>
)

TableauBarnSpace.propTypes = {
  space: PropTypes.any,
  className: PropTypes.string.isRequired,
  handleLoad: PropTypes.func,
}

export default TableauBarnSpace
