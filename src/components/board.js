import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MoveSelect from './move_select'
import RoundBoard from './round_board'
import ActionsBoard from './actions_board'
import ActionsOption from './actions_option'
import Tableau from './tableau'
import GlobalStatus from './global_status'
import PreparationsBoard from './preparations_board'
import './board.css'

const color = worker => {
  switch (worker) {
    case 0:
      return 'activeRed'
    case 1:
      return 'activeYellow'
    default:
      return ''
  }
}

const hasPlacedWorker = props => {
  // need to || [], because the November/December/May/June spots are undefined
  let workersPrepSpot = props.G.workerSpaces[props.ctx.phase] || []
  let nextWorkerToPlace = workersPrepSpot[0]
  let currentPlayer = parseInt(props.ctx.currentPlayer, 10)
  return nextWorkerToPlace !== currentPlayer
}

const Board = props => (
  <div
    className={classNames('Board', color(props.ctx.currentPlayer))}
    style={{ marginTop: '0px' }}
  >
    <ActionsOption G={props.G} ctx={props.ctx} moves={props.moves} />

    <div className="col col1">
      <h4>Red Player</h4>
      <Tableau
        player={props.G.players[0]}
        action={props.G.action}
        moves={props.moves}
      />
    </div>

    <div className="col col2">
      <GlobalStatus
        currentPlayer={parseInt(props.ctx.currentPlayer, 10)}
        lighthouse={props.G.lighthouse}
      />
      <RoundBoard round={props.G.halfYear} />
      <PreparationsBoard
        workerSpaces={props.G.workerSpaces}
        phase={props.ctx.phase}
      />
      <ActionsBoard
        workerSpaces={props.G.workerSpaces}
        toolSpaces={props.G.toolSpaces}
        moves={props.moves}
        game={props.game}
        currentPlayer={props.ctx.currentPlayer}
        phase={props.ctx.phase}
        lighthouseUsed={props.G.lighthouse.used}
      />
      <MoveSelect
        events={props.events}
        moves={props.moves}
        disabled={!hasPlacedWorker(props) || props.G.action != null}
      />
    </div>

    <div className="col col3">
      <h4>Yellow Player</h4>
      <Tableau
        player={props.G.players[1]}
        action={props.G.action}
        moves={props.moves}
      />
    </div>
  </div>
)

Board.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  events: PropTypes.any,
  moves: PropTypes.any,
  playerID: PropTypes.string,
  isActive: PropTypes.bool,
}

export default Board
