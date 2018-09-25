import React from 'react'
import PropTypes from 'prop-types'
import './moveSelect.css'

const goodsFloating = ({ G, ctx: { currentPlayer } }) =>
  G.players[currentPlayer].tokens.length > 0

const hasPlacedWorker = ({ G, ctx }) => {
  // need to || [], because the November/December/May/June spots are undefined
  const workersPrepSpot = G.workerSpaces[ctx.phase] || []
  const nextWorkerToPlace = workersPrepSpot[0]
  const currentPlayer = parseInt(ctx.currentPlayer, 10)
  return nextWorkerToPlace !== currentPlayer
}

const MoveSelect = ({ G, ctx, moves, events }) => {
  const nextMonthDisabled =
    !hasPlacedWorker({ G, ctx }) ||
    G.action != null ||
    goodsFloating({ G, ctx })
  const onNextMonth = () => {
    moves.pass()
    events.endTurn()
  }
  const onArrangeAnimals = () => {
    moves.arrange()
  }
  return (
    <div className="MoveSelect">
      <button type="button" onClick={onArrangeAnimals}>
        Arrange Animals
      </button>
      <button type="submit" disabled={nextMonthDisabled} onClick={onNextMonth}>
        Next Month
      </button>
    </div>
  )
}

MoveSelect.propTypes = {
  moves: PropTypes.any.isRequired,
  events: PropTypes.object.isRequired,
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
}

export default MoveSelect
