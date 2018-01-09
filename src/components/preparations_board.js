import React from 'react';
import PropTypes from 'prop-types';
import PreparationMonth from './preparation_month';
import './preparations_board.css';

export default class PreparationsBoard extends React.Component {
  static propTypes = {
    workerSpaces: PropTypes.any.isRequired,
    phase: PropTypes.string,
  }

  constructor() {
    super()
    this.monthHash = {
      july: 'Jul',
      august: 'Aug',
      september: 'Sep',
      october: 'Oct',
      january: 'Jan',
      february: 'Feb',
      march: 'Mar',
      april: 'Apr'
    }
  }

  monthStyle(month) {
    return this.props.phase === month ? 'glow' : '';
  }

  monthAbbrev(month) {
    return this.monthHash[month]
  }

  render() {
    let months = Object.keys(this.monthHash)
    return (
      <table className="PreparationsBoard">
        <thead>
          <tr>
            <th colSpan="4" className={this.monthStyle('june')}>June Preparations</th>
            <th colSpan="4" className={this.monthStyle('december')}>December Preparations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              months.map((v,i) => {
                return (
                  <td key={i} className={this.monthStyle(v)}>
                    <PreparationMonth month={this.monthAbbrev(v)} workers={this.props.workerSpaces[v]} />
                  </td>
                )
              })
            }
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4" className={this.monthStyle('november')}>November Inventorying</th>
            <th colSpan="4" className={this.monthStyle('may')}>May Inventorying</th>
          </tr>
        </tfoot>
      </table>
    )
  }
}
