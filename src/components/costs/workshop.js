import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

class Builder extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost1: null,
      cost2: 'grain',
    }
  }

  handleCost1 = cost1 => e => {
    this.setState({ cost1 })
  }

  handleCost2 = cost2 => e => {
    this.setState({ cost2 })
  }

  handlePay = e => {
    const { moves } = this.props
    moves.option({ cost: [this.state.cost1, this.state.cost2] })
  }

  render() {
    const { inventory } = this.props
    return (
      <div>
        How to pay for this?
        <hr />
        <b>Cost 1</b>
        <br />
        <input
          type="radio"
          name="cost1"
          id="cost1-wood"
          value="wood"
          onClick={this.handleCost1('wood')}
          disabled={!afford(inventory, ['wood'])}
          defaultChecked={this.state.cost1 === 'wood'}
        />
        <label htmlFor="cost1-wood">Wood</label>
        <br />
        <input
          type="radio"
          name="cost1"
          id="cost1-clay"
          value="clay"
          onClick={this.handleCost1('clay')}
          disabled={!afford(inventory, ['clay'])}
          defaultChecked={this.state.cost1 === 'clay'}
        />
        <label htmlFor="cost1-clay">Clay</label>
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
        <br />
        <input
          type="radio"
          name="cost1"
          id="cost1-brick"
          value="brick"
          onClick={this.handleCost1('brick')}
          disabled={!afford(inventory, ['brick'])}
          defaultChecked={this.state.cost1 === 'brick'}
        />
        <label htmlFor="cost1-brick">Brick</label>
        <hr />
        <b>Cost 2</b>
        <br />
        <input
          type="radio"
          name="cost2"
          id="cost2-grain"
          value="grain"
          onClick={this.handleCost2('grain')}
          defaultChecked={this.state.cost2 === 'grain'}
        />
        <label htmlFor="cost2-grain">Grain</label>
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

Builder.propTypes = {
  // this.props.G.players[this.props.ctx.currentPlayer]
  inventory: PropTypes.array.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Builder
