import React from 'react';
import PropTypes from 'prop-types';

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
        <h3>Summer</h3>

      </main>
    );
  }
}
