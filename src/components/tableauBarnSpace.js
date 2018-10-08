import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Vehicle from './vehicle'
import './tableauBarnSpace.css'

const TableauBarnSpace = ({ space, className, handleLoad }) => (
  <div className={classNames('TableauBarnSpace', className)}>
    {space && <Vehicle vehicle={space} handleLoad={handleLoad} />}
  </div>
)

TableauBarnSpace.propTypes = {
  space: PropTypes.any,
  className: PropTypes.string.isRequired,
  handleLoad: PropTypes.func,
}

export default TableauBarnSpace
