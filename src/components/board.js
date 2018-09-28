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
  G: { selected, players, action },
  events,
  moves,
}) => (
  <div
    className={classNames('Board', color(currentPlayer))}
    style={{ marginTop: '0px' }}
  >
    <ActionsOption G={G} ctx={ctx} moves={moves} />

    <div className="col col1">
      <Tableau
        player={players[0]}
        action={action}
        moves={moves}
        shouldShowPlace={
          currentPlayer === '0' &&
          selected !== undefined &&
          selected.col === undefined
        }
      />
    </div>

    <div className="col col2">
      <BuildingsBoard
        buildings={G.buildings}
        moves={moves}
        shouldShowBuy={action === 'builder' && selected === undefined}
        G={G}
        ctx={ctx}
      />
    </div>
    <div className="col col3">
      <LighthouseStatus lighthouse={G.lighthouse} />
      <RoundBoard round={G.halfYear} />

      <PreparationsBoard workerSpaces={G.workerSpaces} phase={ctx.phase} />
      <MoveSelect G={G} ctx={ctx} events={events} moves={moves} />
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
        shouldShowPlace={
          ctx.currentPlayer === '1' &&
          selected !== undefined &&
          selected.col === undefined
        }
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
