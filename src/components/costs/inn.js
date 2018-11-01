import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

const doubleMats = [
  ['wood', 'clay'],
  ['wood', 'timber'],
  ['wood', 'brick'],
  ['clay', 'timber'],
  ['clay', 'brick'],
  ['timber', 'brick'],
]

class Inn extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost: [],
    }
  }

  handleAddCost = item => e => {
    this.setState({ cost: [...this.state.cost, item] })
  }

  handlePay = e => {
    const { cost } = this.state
    this.props.moves.option({ cost })
  }

  render() {
    const { inventory, goods } = this.props
    return (
      <div>
        Building this needs 2 different goods and 9 food
        <hr />
        <b>Cost 1</b>
        {doubleMats.map(mats => (
          <div>
            <input
              type="radio"
              name="cost1"
              id={`cost1-${mats[0]}-${mats[1]}`}
              value={mats}
              onClick={this.handleCost1}
              disabled={!afford(inventory, mats)}
            />
            <label htmlFor={`cost1-${mats[0]}-${mats[1]}`}>
              {mats.join(' + ')}
            </label>
          </div>
        ))}
        <br />
        <b>Cost 2</b>
        <br />
        <input
          type="radio"
          name="9food"
          disabled={goods.food < 9}
          checked={goods.food >= 9}
        />
        <label htmlFor="9food">9 food</label>
        <hr />
        <button
          type="submit"
          disabled={this.state.cost1 === null || this.state.cost2 === null}
          onClick={this.handlePay}
        >
          Pay
        </button>
      </div>
    )
  }
}

Inn.propTypes = {
  inventory: PropTypes.array.isRequired,
  goods: PropTypes.object.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Inn
