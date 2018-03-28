import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'
import TableauFarm from '../tableau_farm'

const affordStall = player =>
  player.goods.grain >= 1 && afford(player.inventory, ['clay', 'clay'])
const affordStable = player => afford(player.inventory, ['brick', 'brick'])

const Carpenter = ({ G, ctx, moves }) => {
  const handleBuild = (row, col) => e => {
    moves.option({ row, col })
  }
  const player = G.players[ctx.currentPlayer]
  return (
    <TableauFarm
      land={player.land}
      dikes={player.dikes}
      handleBuildStall={affordStall(player) ? handleBuild : null}
      handleBuildStable={affordStable(player) ? handleBuild : null}
    />
  )
}

Carpenter.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Carpenter
