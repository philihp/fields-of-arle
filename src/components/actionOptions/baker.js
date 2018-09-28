import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'

const countFuel = (accum, item) =>
  accum + (item === 'peat' || item === 'wood' ? 1 : 0)

class Baker extends React.Component {
  constructor(props) {
    super(props)
    const {
      G,
      ctx: { currentPlayer },
    } = props
    const oven = 'ovens'
    const goods = G.players[currentPlayer].goods
    const fuelCount = G.players[currentPlayer].inventory.reduce(countFuel, 0)
    const ovenCount = toolValue(oven, G.toolSpaces[oven][currentPlayer])
    const grainCount = goods.grain + goods.flax
    const maxTimes = Math.min(fuelCount, ovenCount, grainCount)
    this.state = {
      maxTimes,
      peatCount: G.players[currentPlayer].inventory.reduce(
        (accum, item) => accum + (item === 'peat' ? 1 : 0),
        0
      ),
      grainCount: goods.grain,
    }
  }

  goodConsumption = i => {
    if (i <= this.state.grainCount) {
      return `${i} grain`
    } else {
      return `${this.state.grainCount} grain, ${i - this.state.grainCount} flax`
    }
  }

  fuelConsumption = i => {
    if (i <= this.state.peatCount) {
      return `${i} peat`
    } else {
      return `${this.state.peatCount} peat, ${i - this.state.peatCount} wood`
    }
  }

  consumption = i =>
    'consumes ' + this.goodConsumption(i) + ' and ' + this.fuelConsumption(i)

  handleClick = times => e => {
    this.props.moves.option(times)
  }

  render() {
    return (
      <div>
        Convert grain + peat to 6 food. You can replace grain with flax and peat
        with wood, if you have none.
        <br />
        <br />
        {[...Array(this.state.maxTimes + 1)].map((_, i) => i).map(i => (
          <div key={i}>
            <button
              type="button"
              name="bakerConvert"
              id={'bakerConvert' + i}
              value={i}
              onClick={this.handleClick(i)}
              defaultChecked={this.state.checked}
            >
              {i} time
            </button>
            {this.consumption(i)}
          </div>
        ))}
      </div>
    )
  }
}

Baker.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Baker,
}
