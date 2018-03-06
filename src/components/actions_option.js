import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './actions_option.css'
import actionOptions from './action_options'

const isVisible = G => {
  return Object.keys(actionOptions).includes(G.action)
}

const ActionsOption = ({ G, ctx }) => {
  // necessary because JSX tags need an uppercase letter constant
  const Options = actionOptions[G.action]
  return (
    <div className={classNames('ActionsOption', { visible: isVisible(G) })}>
      {isVisible(G) && <Options />}
    </div>
  )
}

ActionsOption.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any,
}

export default ActionsOption
