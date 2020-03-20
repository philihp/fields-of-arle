import React from 'react'
import PropTypes from 'prop-types'
import { possiblePeatLocations } from '../../game/constants'

class FarmersHouse extends React.Component {
  handleCutPeat = ({ col, row }) => e => {
    const { moves } = this.props
    moves.option({
      row,
      col,
    })
  }

  handleSkipCutPeat = e => {
    const { moves } = this.props
    moves.option()
  }

  render() {
    const {
      G,
      ctx: { currentPlayer },
    } = this.props
    const land = G.players[currentPlayer].land
    const peatLocations = possiblePeatLocations.reduce((accum, coord) => {
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
        <p>Where to cup peat with farmer's house?</p>
        <ul>
          {peatLocations.map(loc => (
            <li key={[loc.row, loc.col].join(',')}>
              <button type="button" onClick={this.handleCutPeat(loc)}>
                {loc.row}, {loc.col}:{loc.contents}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleSkipCutPeat}>
          Skip Cut Peat
        </button>
      </div>
    )
  }
}

FarmersHouse.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: FarmersHouse,
}
