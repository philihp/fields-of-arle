import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ButtonToolbar } from  'react-bootstrap';
import './move_select.css'

export default class MoveSelect extends React.Component {
  static propTypes = {
    endTurn: PropTypes.func.isRequired
  }

  endTurn() {
    this.props.endTurn();
  }

  render() {
    return (
      <ButtonToolbar className="MoveSelect">
        <ButtonGroup>
          <Button bsStyle="primary" onClick={() => this.endTurn()}>End Work Phase</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
