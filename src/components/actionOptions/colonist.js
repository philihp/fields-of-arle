import React from 'react'

import PropTypes from 'prop-types'

const Name = ['Left', 'Middle', 'Right']

const Colonist = ({ G, ctx: { currentPlayer }, moves }) => {
  const land = G.players[currentPlayer].land
  const cols = land[5].map(cell => cell.type === 'moorNorth')
  return (
    <div>
      Get a horse, also flip moor and add 4 peat...
      <br />
      {cols.map((available, i) => (
        <button type="button" key={Name[i]} onClick={() => moves.option(i)}>
          Column {Name[i]}
        </button>
      ))}
    </div>
  )
}

Colonist.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Colonist,
}
