import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'
import { countAnimals } from '../../game/common/player'

class Butcher extends React.Component {
  constructor(props) {
    super(props)
    const { G, ctx } = props
    const { sheep, cattle, horses } = countAnimals(G.players[ctx.currentPlayer])
    this.state = {
      maxTimes: toolValue(
        'slaughteringTables',
        G.toolSpaces.slaughteringTables[ctx.currentPlayer]
      ),
      sheepMax: sheep,
      cattleMax: cattle,
      horsesMax: horses,
      sheep: 0,
      cattle: 0,
      horses: 0,
    }
  }

  canSlaughterMore = () =>
    this.state.sheep + this.state.cattle + this.state.horses <
    this.state.maxTimes

  handleHorsesClick = e => {
    if (!this.canSlaughterMore()) {
      return
    }
    e.target.disabled = true
    this.setState({ horses: this.state.horses + 1 })
  }

  handleSheepClick = e => {
    if (!this.canSlaughterMore()) {
      return
    }
    e.target.disabled = true
    this.setState({ sheep: this.state.sheep + 1 })
  }

  handleCattleClick = e => {
    if (!this.canSlaughterMore()) {
      return
    }
    e.target.disabled = true
    this.setState({ cattle: this.state.cattle + 1 })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.moves.option({
      sheep: this.state.sheep,
      cattle: this.state.cattle,
      horses: this.state.horses,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Sheep and Horses -> 3 food, 2 hide each
        <br />
        Cattle -> 4 food, 2 hide each
        <br />
        <br />
        Select up to {this.state.maxTimes} animals to convert.
        <br />
        <br />
        {[...Array(this.state.sheepMax)].map((_, i) => i).map(i => (
          <button
            type="button"
            key={i}
            disabled={!this.canSlaughterMore()}
            onClick={this.handleSheepClick}
          >
            Sheep
          </button>
        ))}
        {[...Array(this.state.horsesMax)].map((_, i) => i).map(i => (
          <button
            type="button"
            key={i}
            disabled={!this.canSlaughterMore()}
            onClick={this.handleHorsesClick}
          >
            Horse
          </button>
        ))}
        {[...Array(this.state.cattleMax)].map((v, idx) => idx).map(i => (
          <button
            type="button"
            key={i}
            disabled={!this.canSlaughterMore()}
            onClick={this.handleCattleClick}
          >
            Cattle
          </button>
        ))}
        <br />
        <br />
        <input type="submit" value="Convert" />
      </form>
    )
  }
}

Butcher.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Butcher,
}
