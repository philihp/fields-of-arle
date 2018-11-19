import React from 'react'
import PropTypes from 'prop-types'

class Bakehouse extends React.Component {
  constructor(props) {
    super(props)
    const {
      G,
      ctx: { currentPlayer },
    } = props
    const goods = G.players[currentPlayer].goods
    const maxTimes = Math.min(goods.grain / 2, goods.flax)
    this.state = {
      maxTimes,
    }
  }

  consumption = i => `consumes ${i * 2} grain and ${i} flax`

  handleClick = times => e => {
    this.props.moves.option(times)
  }

  render() {
    return (
      <div>
        Convert grain + flax to 8 food.
        <br />
        <br />
        {[...Array(this.state.maxTimes + 1)]
          .map((_, i) => i)
          .map(i => (
            <div key={i}>
              <button
                type="button"
                name="BakehouseConvert"
                id={'BakehouseConvert' + i}
                value={i}
                onClick={this.handleClick(i)}
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

Bakehouse.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Bakehouse,
}
