import React from 'react';
import PropTypes from 'prop-types';

export default class CurrentPlayer extends React.Component {
  static propTypes = {
    currentPlayer: PropTypes.number.isRequired,
  }

  color(worker) {
    switch(worker) {
      case 0: return '#e64505';
      case 1: return '#c7a200';
      default: return 'red'
    }
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        Current Player&nbsp;
        <span style={{fontWeight: 'bold', color: this.color(this.props.currentPlayer)}}>{this.props.currentPlayer}</span>&nbsp;
      </div>
    )
  }
}
