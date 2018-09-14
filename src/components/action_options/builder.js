import React from 'react'
import PropTypes from 'prop-types'

const visible = ({ selected }) =>
  selected !== undefined &&
  selected.building !== undefined &&
  selected.col !== undefined &&
  selected.row !== undefined

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
    this.props.moves.option({ cost: [this.state.cost1, this.state.cost2] })
  }

  render() {
    return (
      <div>
        How to pay for this?
        <hr />
        <b>Cost 1</b>
        <br />
        <input
          type="radio"
          name="cost1"
          value="wood"
          onClick={this.handleCost1('wood')}
          defaultChecked={this.state.cost1 === 'wood'}
        />
        <label htmlFor="wood">Wood</label>
        <br />
        <input
          type="radio"
          name="cost1"
          value="clay"
          onClick={this.handleCost1('clay')}
          defaultChecked={this.state.cost1 === 'clay'}
        />
        <label htmlFor="clay">Clay</label>
        <br />
        <input
          type="radio"
          name="cost1"
          value="timber"
          onClick={this.handleCost1('timber')}
          defaultChecked={this.state.cost1 === 'timber'}
        />
        <label htmlFor="timber">Timber</label>
        <br />
        <input
          type="radio"
          name="cost1"
          value="brick"
          onClick={this.handleCost1('brick')}
          defaultChecked={this.state.cost1 === 'brick'}
        />
        <label htmlFor="brick">Brick</label>
        <hr />
        <b>Cost 2</b>
        <br />
        <input
          type="radio"
          name="cost2"
          value="grain"
          onClick={this.handleCost2('grain')}
          defaultChecked={this.state.cost2 === 'grain'}
        />
        <label htmlFor="grain">Grain</label>
        <hr />
        <button
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
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Builder,
}
