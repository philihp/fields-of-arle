import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'

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
      checked: maxTimes,
    }
  }

  render() {
    const handleClick = e => {
      this.setState({ checked: parseInt(e.target.value, 10) })
    }

    const handleSubmit = e => {
      e.preventDefault()
      this.props.moves.option(this.state.checked)
    }

    return (
      <form onSubmit={handleSubmit}>
        Convert a wool to woolen, per loom<br />
        <br />
        {Array.from(Array(this.state.maxTimes + 1), (v, idx) => idx).map(i => {
          return (
            <div key={i}>
              <input
                type="radio"
                name="woolWeaverConvert"
                id={i}
                value={i}
                onClick={handleClick}
                defaultChecked={this.state.checked}
              />
              <label htmlFor={i}>Convert {i} wool</label>
            </div>
          )
        })}
        <input type="submit" value="Convert" />
      </form>
    )
  }
}

WoolWeaver.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: WoolWeaver,
}
