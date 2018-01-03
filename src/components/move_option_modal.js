import React from 'react';
import PropTypes from 'prop-types';

/**
 * This class is intended to popup with additional parameters after the action
 * is selected by the active player. For instance, the player selects the
 * Wainwright action. The game state is modified to say "hey display the wainwright
 * popup", which will then prompt them which vehicle to build.
 */
export default class MoveOptionModal extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
  }

  explore() {
    this.props.moves.explore("foo-modal");
    this.props.endTurn();
  }

  render() {
    return (
      <div>
        Move option modal
      </div>
    )
  }
}
