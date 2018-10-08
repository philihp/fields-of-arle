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

const MoveSelect = ({ G, ctx, moves, undo }) => {
  const nextMonthDisabled =
    !hasPlacedWorker({ G, ctx }) ||
    G.action != null ||
    goodsFloating({ G, ctx })
  const onNextMonth = () => {
    moves.pass()
  }
  const handleArrange = () => {
    moves.arrange()
  }
  const handleUndo = () => {
    undo()
  }
  return (
    <div className="MoveSelect">
      <button
        type="button"
        onClick={handleArrange}
        disabled={![null, 'arrange'].includes(G.action)}
        className={classNames({ selected: G.action === 'arrange' })}
      >
        Arrange
      </button>
      <button type="button" onClick={handleUndo}>
        Undo
      </button>
      <button type="submit" disabled={nextMonthDisabled} onClick={onNextMonth}>
        Pass
      </button>
    </div>
  )
}

MoveSelect.propTypes = {
  moves: PropTypes.any.isRequired,
  undo: PropTypes.func.isRequired,
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
}

export default MoveSelect
