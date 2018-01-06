import React from 'react';
import PropTypes from 'prop-types';

export default class StackedWorkerSpot extends React.Component {
  static propTypes = {
    workers: PropTypes.any.isRequired,
  }

  fillColor(worker) {
    switch(worker) {
      case 0: return '#fc8d62';
      case 1: return '#ffd92f';
      default: return 'red'
    }
  }

  strokeColor(worker) {
    switch(worker) {
      case 0: return '#e64505';
      case 1: return '#c7a200';
      default: return 'red'
    }
  }

  render() {
    var hi, lo;
    switch(this.props.workers.length) {
      case 2:
        hi = this.props.workers[0];
        lo = this.props.workers[1];
        break;
      case 1:
        hi = null;
        lo = this.props.workers[0];
        break;
      default:
        hi = null;
        lo = null;
        break;
    }
    return (
      <svg width="40" height="35" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
        { lo !== null && (
          // lo must be drawn first, because hi sits on top of it
          <g>
            <path d="M 3 45 V 65 A 47 20 0 0 0 50 85 A 47 20 0 0 0 97 65 V 45"
              stroke={this.strokeColor(lo)} strokeWidth="3" fill={this.fillColor(lo)}
              />
            <ellipse cx="50" cy="45" rx="47" ry="20"
              stroke={this.strokeColor(lo)} strokeWidth="3" fill={this.fillColor(lo)}
              />
          </g>
        )}
        { hi !== null && (
          <g>
            <path d="M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
              stroke={this.strokeColor(hi)} strokeWidth="3" fill={this.fillColor(hi)}
              />
            <ellipse cx="50" cy="25" rx="47" ry="20"
              stroke={this.strokeColor(hi)} strokeWidth="3" fill={this.fillColor(hi)}
              />
          </g>
        )}
      </svg>
    )
  }
}
