import React from 'react';
import PropTypes from 'prop-types';
import RoundBoard from './round_board';
import ActionsBoard from './actions_board';
import PreparationsBoard from './preparations_board';

export default class Board extends React.Component {
  static propTypes = {
    G:        PropTypes.any.isRequired,
    ctx:      PropTypes.any.isRequired,
    endTurn:  PropTypes.func.isRequired,
    moves:    PropTypes.any.isRequired,
  }

  render() {
    return (
      <div className="container-fluid">
        <RoundBoard round={this.props.G.round} />
        <PreparationsBoard preparations={this.props.G.preparations} />
        <ActionsBoard actions={this.props.G.actions} tools={this.props.G.tools} />
      </div>
    );
  }
}
