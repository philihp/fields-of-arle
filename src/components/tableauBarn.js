import React from 'react'
import PropTypes from 'prop-types'
import TableauBarnSpace from './tableauBarnSpace'
import './tableauBarn.css'

const TableauBarn = ({ barn }) => (
  <div>
    Barn:
    <div className="TableauBarn">
      <TableauBarnSpace space={barn.small1} className="s1" />
      <TableauBarnSpace space={barn.small2} className="s2" />
      <TableauBarnSpace space={barn.small3} className="s3" />
      <TableauBarnSpace space={barn.small4} className="s4" />
      <TableauBarnSpace space={barn.large1} className="l1" />
      <TableauBarnSpace space={barn.large2} className="l2" />
      <TableauBarnSpace space={barn.large3} className="l3" />
    </div>
  </div>
)

TableauBarn.propTypes = {
  barn: PropTypes.object.isRequired,
}

export default TableauBarn
