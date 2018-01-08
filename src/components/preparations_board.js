import React from 'react';
import PropTypes from 'prop-types';
import PreparationMonth from './preparation_month';
import './preparations_board.css';

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    preparations: PropTypes.any.isRequired,
    phase: PropTypes.string,
  }

  constructor() {
    super()
    this.monthHash = {
      July: 'Jul',
      August: 'Aug',
      September: 'Sep',
      October: 'Oct',
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr'
    }
  }

  monthStyle(month) {
    return this.props.phase === month ? 'glow' : '';
  }

  monthAbbrev(month) {
    return this.monthHash[month]
  }

  render() {
    let months = Object.keys(this.monthHash);
    return (
      <table className="PreparationsBoard">
        <thead>
          <tr>
            <th colSpan="4" className={this.monthStyle('June')}>June Preparations</th>
            <th colSpan="4" className={this.monthStyle('December')}>December Preparations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              months.map((v,i) => {
                return (
                  <td key={i} className={this.monthStyle(v)}>
                    <PreparationMonth month={this.monthAbbrev(v)} workers={this.props.preparations[i]} />
                  </td>
                )
              })
            }
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4" className={this.monthStyle('November')}>November Inventorying</th>
            <th colSpan="4" className={this.monthStyle('May')}>May Inventorying</th>
          </tr>
        </tfoot>
      </table>
    )
  }
}
