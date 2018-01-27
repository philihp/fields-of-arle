import React from 'react';
import PropTypes from 'prop-types';
import './move_option_modal.css';
import { Modal, Button } from 'react-materialize';

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

  render() {
    return (
      <Modal
      header='Modal Header'
      trigger={<Button>MODAL</Button>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Modal>
    )
  }
}
