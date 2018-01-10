import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ButtonToolbar } from  'react-bootstrap';
import './move_select.css'

export default class MoveSelect extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    moves: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
  }

  commit() {
    this.props.moves.commit();
    this.props.game.endTurn();
  }

  render() {
    return (
      <ButtonToolbar className="MoveSelect">
        <ButtonGroup>
          <Button bsStyle="primary" disabled={this.props.disabled} onClick={() => this.commit()}>Next Month</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
