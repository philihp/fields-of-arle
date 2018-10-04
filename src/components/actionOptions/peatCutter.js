import React from 'react'
import PropTypes from 'prop-types'
import { toolValue, possiblePeatLocations } from '../../game/constants'

// TODO: don't show moors that are already cut
// TODO: have an option to skip cutting

class PeatCutter extends React.Component {
  constructor(props) {
    super(props)
    const {
      G,
      ctx: { currentPlayer },
    } = props
    const spades = toolValue('spades', G.toolSpaces.spades[currentPlayer])
    const land = G.players[currentPlayer].land

    this.state = {
      spades,
      toDrain: [],
      locations: possiblePeatLocations.reduce((accum, coord) => {
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
      }, []),
    }
  }

  drainBog = i => e => {
    if (
      this.state.spades <= 0 ||
      this.state.locations[i].contents.indexOf('peat') === -1
    ) {
      return
    }
    const locations = this.state.locations.slice()
    locations[i] = {
      ...this.state.locations[i],
      contents: this.state.locations[i].contents.slice(1),
    }
    this.setState({
      toDrain: [
        ...this.state.toDrain,
        { row: locations[i].row, col: locations[i].col },
      ],
      spades: this.state.spades - 1,
      locations,
    })
  }

  sendMoveOptions = e => {
    this.props.moves.option(...this.state.toDrain)
  }

  render() {
    return (
      <div>
        <p>Peat Cutter Options:</p>
        <ul>
          {this.state.locations.map((loc, i) => (
            <li key={[loc.row, loc.col].join(',')}>
              <button type="button" onClick={this.drainBog(i)}>
                {loc.row}, {loc.col}:{loc.contents}
              </button>
            </li>
          ))}
        </ul>
        <button type="submit" onClick={this.sendMoveOptions}>
          Cut Peat
        </button>
      </div>
    )
  }
}

PeatCutter.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: PeatCutter,
}
