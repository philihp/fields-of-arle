import React from 'react';
import PropTypes from 'prop-types';
import './move_select.css'
import { Button } from 'react-materialize'

export default class MoveSelect extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    moves: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Button disabled={this.props.disabled} onClick={() => this.props.game.endTurn()}>Next Month</Button>
    )
  }
}
