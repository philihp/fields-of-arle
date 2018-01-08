import React from 'react';
import PropTypes from 'prop-types';

export default class WorkerSpot extends React.Component {
  static propTypes = {
    worker: PropTypes.number,
  }

  fillColor() {
    switch(this.props.worker) {
      case 0: return '#fc8d62';
      case 1: return '#ffd92f';
      default: return '#efefef'
    }
  }

  strokeColor() {
    switch(this.props.worker) {
      case 0: return '#e64505';
      case 1: return '#c7a200';
      default: return '#d7d7d7'
    }
  }

  render() {
    return this.props.worker !== null && (
      <svg width="40" height="25" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
        <path d=" M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
          stroke={this.strokeColor()} strokeWidth="3" fill={this.fillColor()}
          />
        <ellipse cx="50" cy="25" rx="47" ry="20"
          stroke={this.strokeColor()} strokeWidth="3" fill={this.fillColor()}
          />
      </svg>
    )
  }
}
