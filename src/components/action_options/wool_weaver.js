import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/tool_increments'

const weavingLooms = 'weavingLooms'

//toolValue('weavingLooms', G.tools)

// TODO need a form and action for this
const WoolWeaver = ({ G, ctx, moves }) => {
  const wool = G.players[ctx.currentPlayer].goods.wool
  const looms = toolValue(
    weavingLooms,
    G.toolSpaces[weavingLooms][ctx.currentPlayer]
  )
  const maxTimes = Math.min(wool, looms)
  return (
    <div>
      Convert a wool to woolen, per loom<br />
      <br />
      {Array.from(Array(maxTimes + 1), (v, idx) => idx).map(i => {
        return (
          <div key={i}>
            <input type="radio" name="woolWeaverConvert" id={i} />
            <label for={i}>Convert {i} wool</label>
          </div>
        )
      })}
    </div>
  )
}

WoolWeaver.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default WoolWeaver
