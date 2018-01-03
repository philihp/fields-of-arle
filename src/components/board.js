import React from 'react';
import PropTypes from 'prop-types';
import MoveSelect from './move_select';
import MoveOptionModal from './move_option_modal';
import RoundBoard from './round_board';
import ActionsBoard from './actions_board';
import HomeBoard from './home_board';
import PreparationsBoard from './preparations_board';

export default class Board extends React.Component {
  static propTypes = {
    G:         PropTypes.any.isRequired,
    ctx:       PropTypes.any.isRequired,
    endTurn:   PropTypes.func.isRequired,
    moves:     PropTypes.any.isRequired,
    playerID:  PropTypes.string,
    isActive:   PropTypes.bool,
  }

  render() {
    return (
      <div className="container-fluid">
        <MoveSelect availableMoves={this.props.G.availableMoves} endTurn={this.props.endTurn} moves={this.props.moves} />
        <MoveOptionModal G={this.props.G} />
        <RoundBoard round={this.props.G.round} />
        <PreparationsBoard preparations={this.props.G.preparations} />
        <ActionsBoard actions={this.props.G.actions} tools={this.props.G.tools} />
        <hr />
        Red Player
        <HomeBoard contents={this.props.G.homeBoards[0]} />
        Yellow Player
        <HomeBoard contents={this.props.G.homeBoards[0]} />
      </div>
    );
  }
}
