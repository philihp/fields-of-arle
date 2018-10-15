import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MoveSelect from './moveSelect'
import RoundBoard from './roundBoard'
import ActionsBoard from './actionsBoard'
import ActionsOption from './actionsOption'
import Tableau from './tableau'
import LighthouseStatus from './lighthouseStatus'
import PreparationsBoard from './preparationsBoard'
import SupplyBoard from './supplyBoard'
import BuildingsBoard from './buildingsBoard'
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

const Board = ({
  ctx,
  ctx: { currentPlayer },
  G,
  G: { loading, selected, players, action },
  events,
  moves,
  undo,
}) => (
  <div className={classNames('Board', color(currentPlayer))}>
    <ActionsOption G={G} ctx={ctx} moves={moves} />

    <div className="col col1">
      <Tableau
        player={players[0]}
        action={action}
        usedWorkshops={G.usedWorkshops}
        moves={moves}
        activePlayer={currentPlayer === '0'}
        phase={ctx.phase}
      />
    </div>

    <div className="col col2">
      <BuildingsBoard buildings={G.buildings} moves={moves} />
    </div>
    <div className="col col3">
      <LighthouseStatus lighthouse={G.lighthouse} />
      <RoundBoard round={G.halfYear} />

      <PreparationsBoard workerSpaces={G.workerSpaces} phase={ctx.phase} />
      <MoveSelect G={G} ctx={ctx} events={events} moves={moves} undo={undo} />
      <ActionsBoard
        workerSpaces={G.workerSpaces}
        toolSpaces={G.toolSpaces}
        moves={moves}
        currentPlayer={ctx.currentPlayer}
        phase={ctx.phase}
        lighthouseUsed={G.lighthouse.used}
      />
      <SupplyBoard supplies={G.supplies} />
    </div>

    <div className="col col4">
      <Tableau
        player={players[1]}
        action={action}
        moves={moves}
        activePlayer={currentPlayer === '1'}
        phase={ctx.phase}
      />
    </div>
  </div>
)

Board.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  events: PropTypes.object.isRequired,
}

export default Board
