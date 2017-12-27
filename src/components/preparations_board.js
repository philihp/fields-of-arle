import React from 'react';
import PropTypes from 'prop-types';
import StackedWorkerSpot from './stacked_worker_spot'
import './preparations_board.css'

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    preparations: PropTypes.any.isRequired,
  }

  render() {
    return (
      <table className="PreparationsBoard">
        <thead>
          <tr>
            <th colSpan="4">June Preparations</th>
            <th colSpan="4">December Preparations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>July</div>
              <StackedWorkerSpot workers={this.props.preparations.july} />
            </td>
            <td>
              <div>August</div>
              <StackedWorkerSpot workers={this.props.preparations.august} />
            </td>
            <td>
              <div>September</div>
              <StackedWorkerSpot workers={this.props.preparations.september} />
            </td>
            <td>
              <div>October</div>
              <StackedWorkerSpot workers={this.props.preparations.october} />
            </td>
            <td>
              <div>January</div>
              <StackedWorkerSpot workers={this.props.preparations.january} />
            </td>
            <td>
              <div>February</div>
              <StackedWorkerSpot workers={this.props.preparations.february} />
            </td>
            <td>
              <div>March</div>
              <StackedWorkerSpot workers={this.props.preparations.march} />
            </td>
            <td>
              <div>April</div>
              <StackedWorkerSpot workers={this.props.preparations.april} />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4">November Inventorying</th>
            <th colSpan="4">May Inventorying</th>
          </tr>
        </tfoot>
      </table>
    )
  }
}
