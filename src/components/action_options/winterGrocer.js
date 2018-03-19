import React from 'react'
import PropTypes from 'prop-types'
import { toolValue, possiblePeatLocations } from '../../game/constants'

class WinterGrocer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animal: null,
      toDrain: null,
    }
  }

  drainBog = (row, col) => e => {
    this.setState({
      toDrain: { row, col },
    })
  }

  sendMoveOptions = e => {
    this.props.moves.option(this.state.toDrain, this.state.animal)
  }

  handleClick = animal => e => {
    this.setState({ animal })
  }

  render() {
    const { G, ctx: { currentPlayer } } = this.props
    const land = G.players[currentPlayer].land

    const locations = possiblePeatLocations.reduce((accum, coord) => {
      const contents = land[coord[0]][coord[1]].contents.filter(
        i => i === 'peat'
      )
      if (contents.length === 0) return accum
      return [
        ...accum,
        {
          row: coord[0],
          col: coord[1],
          contents,
        },
      ]
    }, [])

    return (
      <div>
        <p>Cut Peat at:</p>
        <ul>
          {locations.map((loc, i) => {
            return (
              <li key={[loc.row, loc.col].join(',')}>
                <button
                  disabled={this.state.toDrain !== null}
                  onClick={this.drainBog(loc.row, loc.col)}
                >
                  {loc.row}, {loc.col}:
                  {loc.contents}
                </button>
              </li>
            )
          })}
        </ul>
        <p>Get Animal:</p>
        <input
          type="radio"
          name="winterGrocerAnimal"
          id="winterGrocerSheep"
          onClick={this.handleClick('sheep')}
        />
        <label htmlFor="winterGrocerSheep">Sheep</label>
        <br />
        <input
          type="radio"
          name="winterGrocerAnimal"
          id="winterGrocerHorse"
          onClick={this.handleClick('horse')}
        />
        <label htmlFor="winterGrocerHorse">Horse</label>
        <br />
        <input
          type="radio"
          name="winterGrocerAnimal"
          id="winterGrocerCattle"
          onClick={this.handleClick('cattle')}
        />
        <label htmlFor="winterGrocerCattle">Cattle</label>
        <br />
        <br />
        <button onClick={this.sendMoveOptions}>Engage</button>
      </div>
    )
  }
}

WinterGrocer.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default WinterGrocer
