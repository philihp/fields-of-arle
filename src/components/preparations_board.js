import React from 'react';
import PropTypes from 'prop-types';
import ActionPrep from './action_prep'
import './preparations_board.css'

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
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
              July
              <ActionPrep state={this.props.G.preparations.july} />
            </td>
            <td>
              August
              <ActionPrep state={this.props.G.preparations.august} />
            </td>
            <td>
              September
              <ActionPrep state={this.props.G.preparations.september} />
            </td>
            <td>
              October
              <ActionPrep state={this.props.G.preparations.october} />
            </td>
            <td>
              January
              <ActionPrep state={this.props.G.preparations.january} />
            </td>
            <td>
              February
              <ActionPrep state={this.props.G.preparations.february} />
            </td>
            <td>
              March
              <ActionPrep state={this.props.G.preparations.march} />
            </td>
            <td>
              April
              <ActionPrep state={this.props.G.preparations.april} />
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
