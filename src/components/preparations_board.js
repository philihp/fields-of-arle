import React from 'react';
import PropTypes from 'prop-types';
import PreparationMonth from './preparation_month';
import './preparations_board.css';

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    preparations: PropTypes.any.isRequired,
  }

  render() {
    let months = ['Jul','Aug','Sep','Oct','Jan','Feb','Mar','Apr']
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
                  <PreparationMonth month={v} workers={this.props.preparations[i]} />
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
