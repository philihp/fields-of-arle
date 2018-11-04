import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

class Mill extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost: [],
    }
  }

  handleCost = cost => e => {
    this.setState({ cost })
  }

  handlePay = e => {
    this.props.moves.option({ cost: ['timber', ...this.state.cost] })
  }

  render() {
    const { inventory, goods } = this.props
    return (
      <div>
        Building this needs 1 timber and either 8 flax or 8 grain.
        <hr />
        <input
          type="radio"
          value="timber"
          checked
          onChange={() => {}}
          disabled={!afford(inventory, ['timber'])}
        />
        <label>Timber</label>
        <hr />
        <input
          type="radio"
          name="cost"
          id="cost-flax"
          value="flax"
          onChange={this.handleCost('flax')}
          disabled={goods.flax >= 8}
          checked={this.state.cost === 'flax'}
        />
        <label htmlFor="cost-flax">8 Flax</label>
        <br />
        <input
          type="radio"
          name="cost"
          id="cost-grain"
          value="grain"
          onChange={this.handleCost('grain')}
          disabled={goods.grain >= 8}
          checked={this.state.cost === 'grain'}
        />
        <label htmlFor="cost-grain">8 Grain</label>
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

Mill.propTypes = {
  inventory: PropTypes.array.isRequired,
  goods: PropTypes.object.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Mill
