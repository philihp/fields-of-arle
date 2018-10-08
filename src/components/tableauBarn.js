import React from 'react'
import PropTypes from 'prop-types'
import TableauBarnSpace from './tableauBarnSpace'
import './tableauBarn.css'

const TableauBarn = ({ barn, handleLoad }) => (
  <div>
    <div className="TableauBarn">
      <TableauBarnSpace
        space={barn.small1}
        className="s1"
        handleLoad={handleLoad && handleLoad('small1')}
      />
      <TableauBarnSpace
        space={barn.small2}
        className="s2"
        handleLoad={handleLoad && handleLoad('small2')}
      />
      <TableauBarnSpace
        space={barn.small3}
        className="s3"
        handleLoad={handleLoad && handleLoad('small3')}
      />
      <TableauBarnSpace
        space={barn.small4}
        className="s4"
        handleLoad={handleLoad && handleLoad('small4')}
      />
      <TableauBarnSpace
        space={barn.large1}
        className="l1"
        handleLoad={handleLoad && handleLoad('large1')}
      />
      <TableauBarnSpace
        space={barn.large2}
        className="l2"
        handleLoad={handleLoad && handleLoad('large2')}
      />
      <TableauBarnSpace
        space={barn.large3}
        className="l3"
        handleLoad={handleLoad && handleLoad('large3')}
      />
    </div>
  </div>
)

TableauBarn.propTypes = {
  barn: PropTypes.object.isRequired,
  handleLoad: PropTypes.func,
}

export default TableauBarn
