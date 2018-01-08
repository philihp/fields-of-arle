import React from 'react';
import PropTypes from 'prop-types';
import MoveSelect from './move_select';
// import MoveOptionModal from './move_option_modal';
// import RoundBoard from './round_board';
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
      <div className="container Board">
        {/* <RoundBoard round={this.props.G.round} /> */}
        <PreparationsBoard preparations={this.props.G.preparations} phase={this.props.ctx.phase} />
        <ActionsBoard actions={this.props.G.actions} tools={this.props.G.tools} />

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
