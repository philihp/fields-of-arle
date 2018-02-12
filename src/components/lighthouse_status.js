import React from 'react'
import PropTypes from 'prop-types'

export default class LighthouseStatus extends React.Component {
  static propTypes = {
    lighthouse: PropTypes.any.isRequired,
  }

  color(worker) {
    switch (worker) {
      case 0:
        return '#e64505'
      case 1:
        return '#c7a200'
      default:
        return 'red'
    }
  }

  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        Lighthouse:{' '}
        <span
          style={{
            fontWeight: 'bold',
            color: this.color(this.props.lighthouse.owner),
          }}
        >
          {this.props.lighthouse.owner}
        </span>
        {!this.props.lighthouse.used && ' unused'}
      </div>
    )
  }
}
