import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from '../tableau_farm'

class Arrange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: null,
    }
  }

  handleSetFocus = (type, row, col) => i => e => {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    this.setState({
      focus: {
        type,
        row,
        col,
        i,
        item: player[type][row][col].contents[i],
      },
    })
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
        focus: {JSON.stringify(this.state.focus)}
        <TableauFarm
          land={player.land}
          dikes={player.dikes}
          focus={this.state.focus}
          handleSetFocus={this.state.focus ? null : this.handleSetFocus}
          handleReleaseFocus={this.state.focus ? this.handleReleaseFocus : null}
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
