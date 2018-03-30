import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './tableau_barn_space.css'

const TableauBarnSpace = ({ contents, className }) => {
  return (
    <div className={classNames('TableauBarnSpace', className)}>
      {contents && JSON.stringify(contents)}
    </div>
  )
}

TableauBarnSpace.propTypes = {
  contents: PropTypes.any,
  className: PropTypes.string.isRequired,
}

export default TableauBarnSpace
