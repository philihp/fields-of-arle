import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MoveSelect from './move_select';
import MoveOptionModal from './move_option_modal';
import RoundBoard from './round_board';
import ActionsBoard from './actions_board';
import HomeBoard from './home_board';
import GlobalStatus from './global_status';
import PreparationsBoard from './preparations_board';
import './board.css';

export default class Board extends React.Component {
  static propTypes = {
    G:         PropTypes.any.isRequired,
    ctx:       PropTypes.any.isRequired,
    events:    PropTypes.any,
    moves:     PropTypes.any,
    playerID:  PropTypes.string,
    isActive:   PropTypes.bool,
  }

  color(worker) {
    switch(worker) {
      case 0: return 'activeRed';
      case 1: return 'activeYellow';
      default: return '';
    }
  }

  hasPlacedWorker() {
    // need to || [], because the November/December/May/June spots are undefined
    let workersPrepSpot = this.props.G.workerSpaces[this.props.ctx.phase] || []
    let nextWorkerToPlace = workersPrepSpot[0]
    let currentPlayer = parseInt(this.props.ctx.currentPlayer, 10);
    return nextWorkerToPlace !== currentPlayer
  }

  render() {
    return (
      <div className={classNames('Board', this.color(this.props.ctx.currentPlayer))} style={{marginTop: '0px'}}>
        <div className='mainColumn col1'>
          <h4>Red Player</h4>
          <HomeBoard player={this.props.G.players[0]} />
        </div>

        <div className='mainColumn col2'>
          <GlobalStatus currentPlayer={parseInt(this.props.ctx.currentPlayer,10)} lighthouse={this.props.G.lighthouse} />
          <RoundBoard round={this.props.G.halfYear} />
          <PreparationsBoard workerSpaces={this.props.G.workerSpaces} phase={this.props.ctx.phase} />
          <ActionsBoard
            workerSpaces={this.props.G.workerSpaces}
            toolSpaces={this.props.G.toolSpaces}
            moves={this.props.moves}
            game={this.props.game}
            currentPlayer={this.props.ctx.currentPlayer}
            phase={this.props.ctx.phase}
            lighthouseUsed={this.props.G.lighthouse.used}
          />
          <MoveSelect
            events={this.props.events}
            moves={this.props.moves}
            disabled={!this.hasPlacedWorker()}
          />
        </div>

        <div className='mainColumn col3'>
          <h4>Yellow Player</h4>
          <HomeBoard player={this.props.G.players[1]} />
        </div>

        <MoveOptionModal G={this.props.G} />

      </div>
    );
  }
}
