import React from 'react';
import PropTypes from 'prop-types';
import WorkerSpot from './worker_spot'

export default class StackedWorkerSpot extends React.Component {
  static propTypes = {
    workers: PropTypes.any.isRequired,
  }

  fillColor(worker) {
    switch(worker) {
      case 'Y': return '#ffd92f';
      case 'R': return '#fc8d62';
      default: return 'red'
    }
  }

  strokeColor(worker) {
    switch(worker) {
      case 'Y': return '#c7a200';
      case 'R': return '#e64505';
      default: return 'red'
    }
  }

  render() {
    let hi = this.props.workers.hi;
    let lo = this.props.workers.lo;

    return (
      <svg width="40" height="35" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
        { lo && (
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
        { hi && (
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
