import React from 'react';
import PropTypes from 'prop-types';
import PreparationMonth from './preparation_month';
import './preparations_board.css';

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    preparations: PropTypes.any.isRequired,
  }

  render() {
    let months = [
      ['Jul','july'],
      ['Aug','august'],
      ['Sep','september'],
      ['Oct','october'],
      ['Jan','january'],
      ['Feb','february'],
      ['Mar','march'],
      ['Apr','april'],
    ]
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
            {
              months.map((v,i) =>
                <td key={i}>
                  <PreparationMonth month={v[0]} workers={this.props.preparations[v[1]]} />
                </td>
              )
            }
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
