import React from 'react'
import PropTypes from 'prop-types'

class BuildersMerchant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      woodClay: null,
      timberBrick: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleWoodClay = this.handleWoodClay.bind(this)
    this.handleTimberBrick = this.handleTimberBrick.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.woodClay === null || this.state.timberBrick === null) return
    this.props.moves.option(this.state.woodClay, this.state.timberBrick)
  }

  handleWoodClay(e) {
    this.setState({ woodClay: e.target.value })
  }
  handleTimberBrick(e) {
    this.setState({ timberBrick: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Choose:<br />
        <input
          type="radio"
          name="woodClay"
          id="woodClayWood"
          value="wood"
          onClick={this.handleWoodClay}
        />
        <label htmlFor="woodClayWood">Wood</label>
        /
        <input
          type="radio"
          name="woodClay"
          id="woodClayClay"
          value="clay"
          onClick={this.handleWoodClay}
        />
        <label htmlFor="woodClayClay">Clay</label>
        <br />
        Choose:<br />
        <input
          type="radio"
          name="timberBrick"
          id="timberBrickTimber"
          value="timber"
          onClick={this.handleTimberBrick}
        />
        <label htmlFor="timberBrickTimber">Timber</label>
        /
        <input
          type="radio"
          name="timberBrick"
          id="timberBrickBrick"
          value="brick"
          onClick={this.handleTimberBrick}
        />
        <label htmlFor="timberBrickBrick">Brick</label>
        <br />
        (also you get 2 hides)
        <input
          type="submit"
          value="Collect"
          disabled={
            this.state.woodClay === null || this.state.timberBrick === null
          }
        />
      </form>
    )
  }
}

BuildersMerchant.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: BuildersMerchant,
}
