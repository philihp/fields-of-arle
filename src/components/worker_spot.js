import React from 'react'
import PropTypes from 'prop-types'
import './worker_spot.css'

export default class WorkerSpot extends React.Component {
  static propTypes = {
    workerSpaces: PropTypes.any.isRequired,
    label: PropTypes.string,
    job: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  worker() {
    return this.props.workerSpaces[this.props.job]
  }

  fillColor() {
    switch (this.worker()) {
      case 0:
        return '#fc8d62'
      case 1:
        return '#ffd92f'
      default:
        return '#efefef'
    }
  }

  strokeColor() {
    switch (this.worker()) {
      case 0:
        return '#e64505'
      case 1:
        return '#c7a200'
      default:
        return '#d7d7d7'
    }
  }

  onClick() {
    this.props.onClick(this.props.job)
  }

  render() {
    const label = this.props.label || this.props.job
    if (this.worker() !== null) {
      return (
        <div className="WorkerSpot">
          <svg
            width="40"
            height="25"
            viewBox="0 0 100 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d=" M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
              stroke={this.strokeColor()}
              strokeWidth="3"
              fill={this.fillColor()}
            />
            <ellipse
              cx="50"
              cy="25"
              rx="47"
              ry="20"
              stroke={this.strokeColor()}
              strokeWidth="3"
              fill={this.fillColor()}
            />
          </svg>
          <div style={{ display: 'inline-block' }}>{label}</div>
        </div>
      )
    } else {
      return (
        <div className="WorkerSpot">
          <button disabled={this.props.disabled} onClick={this.onClick}>
            Use
          </button>
          <div style={{ display: 'inline-block' }}>{label}</div>
        </div>
      )
    }
  }
}
