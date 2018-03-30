import React from 'react'
import PropTypes from 'prop-types'
import TableauBarnSpace from './tableau_barn_space'
import './tableau_barn.css'

const TableauBarn = ({ barn }) => {
  return (
    <div>
      Barn:
      <div className="TableauBarn">
        <TableauBarnSpace contents={barn.small1} className={'s1'} />
        <TableauBarnSpace contents={barn.small2} className={'s2'} />
        <TableauBarnSpace contents={barn.small3} className={'s3'} />
        <TableauBarnSpace contents={barn.small4} className={'s4'} />
        <TableauBarnSpace contents={barn.large1} className={'l1'} />
        <TableauBarnSpace contents={barn.large2} className={'l2'} />
        <TableauBarnSpace contents={barn.large3} className={'l3'} />
      </div>
    </div>
  )
}

TableauBarn.propTypes = {
  barn: PropTypes.object.isRequired,
}

export default TableauBarn
