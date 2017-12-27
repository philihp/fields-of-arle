import React from 'react';
import PropTypes from 'prop-types';

export default class ActionsBoard extends React.Component {
  static propTypes = {
    state: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div>[ {this.props.state.hi }, {this.props.state.lo} ]</div>
    )
  }
}
