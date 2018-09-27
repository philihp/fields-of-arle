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

const Board = props => (
  <div
    className={classNames('Board', color(props.ctx.currentPlayer))}
    style={{ marginTop: '0px' }}
  >
    <ActionsOption G={props.G} ctx={props.ctx} moves={props.moves} />

    <div className="col col1">
      <Tableau
        player={props.G.players[0]}
        action={props.G.action}
        moves={props.moves}
        shouldShowPlace={
          props.ctx.currentPlayer === '0' &&
          props.G.selected !== undefined &&
          props.G.selected.col === undefined
        }
      />
    </div>

    <div className="col col2">
      <BuildingsBoard
        buildings={props.G.buildings}
        moves={props.moves}
        shouldShowBuy={
          props.G.action === 'builder' && props.G.selected === undefined
        }
        G={props.G}
        ctx={props.ctx}
      />
    </div>
    <div className="col col3">
      <LighthouseStatus lighthouse={props.G.lighthouse} />
      <RoundBoard round={props.G.halfYear} />

      <PreparationsBoard
        workerSpaces={props.G.workerSpaces}
        phase={props.ctx.phase}
      />
      <MoveSelect
        G={props.G}
        ctx={props.ctx}
        events={props.events}
        moves={props.moves}
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
      <SupplyBoard supplies={props.G.supplies} />
    </div>

    <div className="col col4">
      <Tableau
        player={props.G.players[1]}
        action={props.G.action}
        moves={props.moves}
        shouldShowPlace={
          props.ctx.currentPlayer === '1' &&
          props.G.selected !== undefined &&
          props.G.selected.col === undefined
        }
      />
    </div>
  </div>
)

Board.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  events: PropTypes.any,
  moves: PropTypes.any,
  game: PropTypes.any,
}

export default Board
