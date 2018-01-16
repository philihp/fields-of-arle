import React from 'react';
import PropTypes from 'prop-types';
import './move_select.css'
import { Button } from 'react-materialize'

export default class MoveSelect extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    debugger;
    this.props.game.endTurn()
  }

  render() {
    return (
      <Button disabled={this.props.disabled} onClick={this.onClick}>Next Month</Button>
    )
  }
}
