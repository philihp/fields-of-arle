import React from 'react'
import PropTypes from 'prop-types'
import TableauLand from '../tableau_land'
import { toolValue } from '../../game/constants'

class Arrange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: null,
    }
  }

  handleSetFocus = (item, type, row, col, i) => e => {
    this.setState({ focus: { item, type, row, col, i } })
  }

  handleReleaseFocus = (type, row, col, i) => e => {
    console.log(type, row, col, i)
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]

    return (
      <div>
        Rearrange<br />
        focus:{' '}
        {this.state.focus &&
          player[this.state.focus.type][this.state.focus.row][
            this.state.focus.col
          ].contents[this.state.focus.i]}
        <TableauLand
          land={player.land}
          dikes={player.dikes}
          focus={this.state.focus}
          handleSetFocus={this.handleSetFocus}
          handleReleaseFocus={this.state.focus && this.handleReleaseFocus}
        />
      </div>
    )
  }
}

Arrange.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Arrange
