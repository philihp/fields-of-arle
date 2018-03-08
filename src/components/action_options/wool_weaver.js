import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/tool_increments'

//toolValue('weavingLooms', G.tools)

class WoolWeaver extends React.Component {
  constructor(props) {
    super(props)
    const { G, ctx } = props
    const weavingLooms = 'weavingLooms'
    const wool = G.players[ctx.currentPlayer].goods.wool
    const looms = toolValue(
      weavingLooms,
      G.toolSpaces[weavingLooms][ctx.currentPlayer]
    )
    const maxTimes = Math.min(wool, looms)
    this.state = {
      maxTimes,
      defaultChecked: maxTimes,
    }
  }

  render() {
    return (
      <div>
        Convert a wool to woolen, per loom<br />
        <br />
        {Array.from(Array(this.state.maxTimes + 1), (v, idx) => idx).map(i => {
          return (
            <div key={i}>
              <input
                type="radio"
                name="woolWeaverConvert"
                id={i}
                checked={this.state.defaultChecked}
              />
              <label htmlFor={i}>Convert {i} wool</label>
            </div>
          )
        })}
      </div>
    )
  }
}

WoolWeaver.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default WoolWeaver
