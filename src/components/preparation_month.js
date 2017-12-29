import React from 'react';
import PropTypes from 'prop-types';
import StackedWorkerSpot from './stacked_worker_spot'

export default class PreparationMonth extends React.Component {
  static propTypes = {
    workers: PropTypes.any.isRequired,
    month: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <div>{this.props.month}</div>
        <StackedWorkerSpot workers={this.props.workers} />
      </div>
    )
  }
}
