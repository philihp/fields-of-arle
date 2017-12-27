import React from 'react';
import PropTypes from 'prop-types';
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
      <main>
        <h1>Fields of Arle</h1>
        <div>Round: {this.props.G.round}</div>
        <ActionsBoard G={this.props.G} />
        <PreparationsBoard G={this.props.G} />
      </main>
    );
  }
}
