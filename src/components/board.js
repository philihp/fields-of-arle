import React from 'react';
import PropTypes from 'prop-types';
import MoveSelect from './move_select';
// import MoveOptionModal from './move_option_modal';
import RoundBoard from './round_board';
import ActionsBoard from './actions_board';
// import HomeBoard from './home_board';
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

  render() {
    return (
      <div className="container Board" style={{marginTop: '0px'}}>
        <RoundBoard round={this.props.G.halfYear} />
        <PreparationsBoard workerSpaces={this.props.G.workerSpaces} phase={this.props.ctx.phase} />
        <ActionsBoard workerSpaces={this.props.G.workerSpaces} toolSpaces={this.props.G.toolSpaces} moves={this.props.moves} game={this.props.game} currentPlayer={this.props.ctx.currentPlayer} phase={this.props.ctx.phase} />

        {/* <MoveOptionModal G={this.props.G} />
        <hr /> */}
        {/* Red Player
        <HomeBoard contents={this.props.G.homeBoards[0]} />
        Yellow Player
        <HomeBoard contents={this.props.G.homeBoards[0]} /> */}
        <MoveSelect game={this.props.game} moves={this.props.moves} />
      </div>
    );
  }
}
