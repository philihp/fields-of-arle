import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './tableauBarnSpace.css'

const TableauBarnSpace = ({ space, className }) => (
  <div className={classNames('TableauBarnSpace', className)}>
    {space && (
      <div>
        <b>{space.type}</b>
        <br />
        {space.contents}
      </div>
    )}
  </div>
)

TableauBarnSpace.propTypes = {
  space: PropTypes.any,
  className: PropTypes.string.isRequired,
}

export default TableauBarnSpace
