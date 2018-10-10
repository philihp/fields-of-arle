import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

class Mill extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost1: 'timber',
      cost2: null,
    }
  }

  handleCost1 = cost1 => e => {
    this.setState({ cost1 })
  }

  handleCost2 = cost2 => e => {
    this.setState({ cost2 })
  }

  handlePay = e => {
    this.props.moves.option({ cost: [this.state.cost1, this.state.cost2] })
  }

  render() {
    const { inventory, goods } = this.props
    return (
      <div>
        How to pay for this?
        <hr />
        <b>Cost 1</b>
        <br />
        <input
          type="radio"
          name="cost1"
          id="cost1-timber"
          value="timber"
          onClick={this.handleCost1('timber')}
          disabled={!afford(inventory, ['timber'])}
          defaultChecked={this.state.cost1 === 'timber'}
        />
        <label htmlFor="cost1-timber">Timber</label>
        <hr />
        <b>Cost 2</b>
        <br />
        <input
          type="radio"
          name="cost2"
          id="cost2-flax"
          value="flax"
          onClick={this.handleCost2('flax')}
          disabled={goods.flax >= 8}
          defaultChecked={this.state.cost2 === 'flax'}
        />
        <label htmlFor="cost2-flax">8 Flax</label>
        <br />
        <input
          type="radio"
          name="cost2"
          id="cost2-grain"
          value="grain"
          onClick={this.handleCost2('grain')}
          disabled={goods.grain >= 8}
          defaultChecked={this.state.cost2 === 'grain'}
        />
        <label htmlFor="cost2-grain">8 Grain</label>
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

Mill.propTypes = {
  inventory: PropTypes.array.isRequired,
  goods: PropTypes.object.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Mill
