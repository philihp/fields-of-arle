import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ButtonToolbar } from  'react-bootstrap';
import './move_select.css'

export default class MoveSelect extends React.Component {
  static propTypes = {
    availableMoves: PropTypes.array.isRequired,
    endTurn:        PropTypes.func.isRequired,
    moves:          PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
    this.explore = this.explore.bind(this);
  }

  explore(move) {
    this.props.moves.explore(move);
  }

  endTurn() {
    this.props.endTurn();
  }

  render() {
    return (
      <ButtonToolbar className="MoveSelect">
        <ButtonGroup>
          {this.props.availableMoves.map((move) =>
            <Button onClick={() => this.explore(move)} key={move}>{move}</Button>
          )}
        </ButtonGroup>
        <ButtonGroup>
          <Button bsStyle="primary" onClick={() => this.endTurn()}>End Work Phase</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
