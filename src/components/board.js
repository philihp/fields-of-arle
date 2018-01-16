import React from 'react';
import PropTypes from 'prop-types';
import MoveSelect from './move_select';
// import MoveOptionModal from './move_option_modal';
import RoundBoard from './round_board';
import ActionsBoard from './actions_board';
// import HomeBoard from './home_board';
import GlobalStatus from './global_status';
import PreparationsBoard from './preparations_board';
import './board.css';

export default class Board extends React.Component {
  static propTypes = {
    G:         PropTypes.any.isRequired,
    ctx:       PropTypes.any.isRequired,
    game:      PropTypes.any.isRequired,
    moves:     PropTypes.any.isRequired,
    playerID:  PropTypes.string,
    isActive:   PropTypes.bool,
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
      <div className="Board" style={{marginTop: '0px'}}>
        <GlobalStatus currentPlayer={parseInt(this.props.ctx.currentPlayer,10)} lighthouse={this.props.G.lighthouse} />
        <RoundBoard round={this.props.G.halfYear} />
        <PreparationsBoard workerSpaces={this.props.G.workerSpaces} phase={this.props.ctx.phase} />
        <ActionsBoard workerSpaces={this.props.G.workerSpaces} toolSpaces={this.props.G.toolSpaces} moves={this.props.moves} game={this.props.game} currentPlayer={this.props.ctx.currentPlayer} phase={this.props.ctx.phase} />

        {/* <MoveOptionModal G={this.props.G} />
        <hr /> */}
        {/* Red Player
        <HomeBoard contents={this.props.G.homeBoards[0]} />
        Yellow Player
        <HomeBoard contents={this.props.G.homeBoards[0]} /> */}
        <MoveSelect game={this.props.game} moves={this.props.moves} disabled={!this.hasPlacedWorker()} />
      </div>
    );
  }
}
