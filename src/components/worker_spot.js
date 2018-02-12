import React from 'react'
import PropTypes from 'prop-types'
import WorkerToken from './worker_token'
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

  onClick(e) {
    e.preventDefault()
    this.props.onClick(this.props.job)
  }

  render() {
    const label = this.props.label || this.props.job
    if (this.worker() !== null) {
      return (
        <div className="WorkerSpot">
          <div style={{ display: 'inline-block' }}>
            <WorkerToken fill={this.fillColor()} stroke={this.strokeColor()}/>
            {label}
          </div>
        </div>
      )
    } else if (this.props.disabled) {
      return (
        <div className="WorkerSpot" style={{ display: 'inline-block' }}>
          {label}
        </div>
      )
    } else {
      return (
        <div className="WorkerSpot">
          <div style={{ display: 'inline-block' }}>
          <a href="#" onClick={this.onClick}>
          {label}
          </a>
          </div>
        </div>
      )
    }
  }
}
