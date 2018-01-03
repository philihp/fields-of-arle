import React from 'react';
import PropTypes from 'prop-types';
import { Button } from  'react-bootstrap';

export default class MoveSelect extends React.Component {
  static propTypes = {
    availableMoves: PropTypes.array.isRequired,
    endTurn:        PropTypes.func.isRequired,
    moves:          PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { selectedMove: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  explore() {
    this.props.moves.explore(this.state.selectedMove);
    this.props.endTurn();
  }

  handleChange(e) {
    this.setState({ selectedMove: e.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedMove} onChange={this.handleChange}>
          {this.props.availableMoves.map((v) =>
            <option key={v}>{v}</option>
          )}
        </select>
        <Button onClick={() => this.explore()}>Explore</Button>
      </div>
    )
  }
}
