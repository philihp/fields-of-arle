import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './actions_option.css'
import actionOptions from './action_options'

const isVisible = G =>
  Object.keys(actionOptions).includes(G.action) &&
  actionOptions[G.action].visible(G)

const ActionsOption = ({ G, ctx, moves }) => {
  // necessary because JSX tags need an uppercase letter constant
  const Options = actionOptions[G.action] && actionOptions[G.action].component
  return (
    <div className={classNames('ActionsOption', { visible: isVisible(G) })}>
      {isVisible(G) && <Options G={G} ctx={ctx} moves={moves} />}
    </div>
  )
}

ActionsOption.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any,
  moves: PropTypes.any,
}

export default ActionsOption
