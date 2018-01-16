import React from 'react';
import PropTypes from 'prop-types';

export default class LighthouseStatus extends React.Component {
  static propTypes = {
    lighthouse: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        Lighthouse owner:
        {this.props.lighthouse.owner}
        {!this.props.lighthouse.used && ' unused'}
      </div>
    )
  }
}
