import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './actions_option.css'

const isHidden = G => {
  return G.action !== 'fisherman'
}

const ActionsOption = ({ G }) => (
  <div className={classNames('ActionsOption', { hidden: isHidden(G) })}>
    action options
  </div>
)

ActionsOption.propTypes = {
  G: PropTypes.any.isRequired,
}

export default ActionsOption
