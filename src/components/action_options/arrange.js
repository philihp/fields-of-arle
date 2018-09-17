import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from '../tableau_farm'
import TableauItem from '../tableau_item'

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
        item:
          type === 'tokens'
            ? player[type][i]
            : player[type][row][col].contents[i],
      },
    })
  }

  handleReleaseFocus = (type, row, col) => e => {
    this.setState({ focus: null })
    this.props.moves.arrange({ src: this.state.focus, dst: { type, row, col } })
  }

  handleFinished = e => {
    this.setState({ focus: null })
    this.props.moves.arrange()
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    const tokenHidden = i =>
      this.props.focus &&
      this.props.focus.type === 'tokens' &&
      this.props.focus.i === i

    return (
      <div>
        Rearrange
        <br />
        focus: {JSON.stringify(this.state.focus)}
        <br />
        {player.tokens.map((item, i) => (
          <TableauItem
            key={i}
            i={i}
            display={tokenHidden(i)}
            handleSetFocus={
              this.state.focus ? null : this.handleSetFocus('tokens')(i)
            }
          >
            {item}
          </TableauItem>
        ))}
        <TableauFarm
          land={player.land}
          dikes={player.dikes}
          focus={this.state.focus}
          handleSetFocus={this.state.focus ? null : this.handleSetFocus}
          handleReleaseFocus={this.state.focus ? this.handleReleaseFocus : null}
        />
        <button onClick={this.handleFinished}>Close</button>
      </div>
    )
  }
}

Arrange.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Arrange,
}
