import React from 'react'
import PropTypes from 'prop-types'
import './moveSelect.css'
import classNames from 'classnames'

const goodsFloating = ({ G, ctx: { currentPlayer } }) =>
  G.players[currentPlayer].tokens.length > 0

const hasPlacedWorker = ({ G, ctx }) => {
  // need to || [], because the November/December/May/June spots are undefined
  const workersPrepSpot = G.workerSpaces[ctx.phase] || []
  const nextWorkerToPlace = workersPrepSpot[0]
  const currentPlayer = parseInt(ctx.currentPlayer, 10)
  return nextWorkerToPlace !== currentPlayer
}

class MoveSelect extends React.Component {
  onNextMonth = () => {
    this.props.moves.pass()
  }

  handleArrange = () => {
    this.props.moves.arrange()
  }

  handleLoad = () => {
    this.props.moves.load()
  }

  handleUndo = () => {
    this.props.undo()
  }

  render() {
    const { G, ctx } = this.props

    const nextMonthDisabled =
      !hasPlacedWorker({ G, ctx }) ||
      G.action != null ||
      goodsFloating({ G, ctx })

    return (
      <div className="MoveSelect">
        <button
          type="button"
          onClick={this.handleArrange}
          disabled={![null, 'arrange'].includes(G.action)}
          className={classNames({ selected: G.action === 'arrange' })}
        >
          Arrange
        </button>
        <button type="button" onClick={this.handleLoad}>
          Load
        </button>
        <button type="button" onClick={this.handleUndo}>
          Undo
        </button>
        <button
          type="submit"
          disabled={nextMonthDisabled}
          onClick={this.onNextMonth}
        >
          Pass
        </button>
      </div>
    )
  }
}

MoveSelect.propTypes = {
  moves: PropTypes.any.isRequired,
  undo: PropTypes.func.isRequired,
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
}

export default MoveSelect
