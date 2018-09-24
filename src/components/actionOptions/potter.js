import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'

const countClay = (accum, item) => accum + (item === 'clay' ? 1 : 0)

class Potter extends React.Component {
  constructor(props) {
    super(props)
    const { G, ctx } = props
    const potteryWheels = 'potteryWheels'
    const clay = G.players[ctx.currentPlayer].inventory.reduce(countClay, 0)
    const pWheels = toolValue(
      potteryWheels,
      G.toolSpaces[potteryWheels][ctx.currentPlayer]
    )
    const maxTimes = Math.min(clay, pWheels)
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
        Convert clay to 3 food and 1 peat, per pottery wheel
        <br />
        <br />
        {[...Array(this.state.maxTimes + 1)].map((_, i) => i).map(i => (
          <div key={i}>
            <input
              type="radio"
              name="potterConvert"
              id={i}
              value={i}
              onClick={handleClick}
              defaultChecked={this.state.checked}
            />
            <label htmlFor={i}>Convert {i} clay</label>
          </div>
        ))}
        <input type="submit" value="Convert" />
      </form>
    )
  }
}

Potter.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Potter,
}
