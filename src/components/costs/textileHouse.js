import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

const doubleMats = [
  ['winterWear', 'summerWear'],
  ['leatherWear', 'winterWear'],
  ['summerWear', 'leatherWear'],
]

class TextileHouse extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost: [],
    }
  }

  handleClothing = item => e => {
    this.setState({ cost: [...this.state.cost, 'brick'] })
  }

  handlePay = e => {
    const { cost } = this.state
    this.props.moves.option({ cost })
  }

  render() {
    const { inventory } = this.props
    return (
      <div>
        Building this needs 2 different pieces of clothing and a brick.
        <hr />
        <b>Cost 1</b>
        {doubleMats.map(mats => (
          <div>
            <input
              type="radio"
              name="cost1"
              id={`cost1-${mats[0]}-${mats[1]}`}
              value={mats}
              onClick={this.handleClothing(mats)}
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
          name="brick"
          disabled={!inventory.includes('brick')}
          checked={inventory.includes('brick')}
        />
        <label htmlFor="brick">Brick</label>
        <hr />
        <button
          type="submit"
          disabled={this.state.cost.length === 0}
          onClick={this.handlePay}
        >
          Pay
        </button>
      </div>
    )
  }
}

TextileHouse.propTypes = {
  inventory: PropTypes.array.isRequired,
  moves: PropTypes.any.isRequired,
}

export default TextileHouse
