import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'

class LinenWeaver extends React.Component {
  constructor(props) {
    super(props)
    const { G, ctx } = props
    const weavingLooms = 'weavingLooms'
    const flax = G.players[ctx.currentPlayer].goods.flax
    const looms = toolValue(
      weavingLooms,
      G.toolSpaces[weavingLooms][ctx.currentPlayer]
    )
    const maxTimes = Math.min(flax, looms)
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
        Convert a flax to linen, per loom
        <br />
        <br />
        {[...Array(this.state.maxTimes + 1)].map((_, i) => i).map(i => (
          <div key={i}>
            <input
              type="radio"
              name="LinenWeaverConvert"
              id={i}
              value={i}
              onClick={handleClick}
              defaultChecked={this.state.checked}
            />
            <label htmlFor={i}>Convert {i} flax</label>
          </div>
        ))}
        <input type="submit" value="Convert" />
      </form>
    )
  }
}

LinenWeaver.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: LinenWeaver,
}
