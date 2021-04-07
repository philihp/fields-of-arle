import React from 'react'
import PropTypes from 'prop-types'

class PottersInn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheep: 0,
      horse: 0,
      cow: 0,
    }
  }

  // TODO toolSpaces are stored beginning at 0 (not at 2...)
  get potteryWheels() {
    return (
      this.props.G.toolSpaces.potteryWheels[+this.props.ctx.currentPlayer] + 2
    )
  }

  get totalAnimals() {
    return this.state.sheep + this.state.horse + this.state.cow
  }

  totalOtherAnimals = animal => this.totalAnimals - this.state[animal]

  decrement = animal => () => {
    this.setState(prevState => ({
      ...prevState,
      [animal]: Math.max(this.state[animal] - 1, 0),
    }))
  }

  increment = animal => () => {
    this.setState(prevState => ({
      ...prevState,
      [animal]: Math.min(
        this.state[animal] + 1,
        // can increment to a max total of pottery wheels
        // however, we need to take the "other" animals into account
        this.potteryWheels - this.totalOtherAnimals(animal)
      ),
    }))
  }

  done = () => {
    const { moves } = this.props
    moves.option({ animals: this.state })
  }

  render() {
    return (
      <div>
        You have selected {this.totalAnimals} of a total of {this.potteryWheels}{' '}
        animals.
        <div>
          Sheep: {this.state.sheep}
          <input type="button" value="+1" onClick={this.increment('sheep')} />
          <input type="button" value="-1" onClick={this.decrement('sheep')} />
        </div>
        <div>
          Horse: {this.state.horse}
          <input type="button" value="+1" onClick={this.increment('horse')} />
          <input type="button" value="-1" onClick={this.decrement('horse')} />
        </div>
        <div>
          Cow: {this.state.cow}
          <input type="button" value="+1" onClick={this.increment('cow')} />
          <input type="button" value="-1" onClick={this.decrement('cow')} />
        </div>
        <input type="button" value="Done" onClick={this.done} />
      </div>
    )
  }
}

PottersInn.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: PottersInn,
}
