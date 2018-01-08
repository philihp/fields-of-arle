import React from 'react';
import PropTypes from 'prop-types';
import './round_board.css'

export default class RoundBoard extends React.Component {
  static propTypes = {
    round: PropTypes.number.isRequired,
  }

  selectedClass(value) {
    return (this.props.round === value) ? 'glow' : ''
  }

  render() {
    let rounds = Array.from({length: (9)}, (v, k) => k + 1) // 1..9
    return (
      <table className="RoundBoard">
        <tbody>
          <tr>
            {rounds.map((v) =>
              (
                <td key={v} className={this.selectedClass(v)}>{v}</td>
              )
            )}
          </tr>
        </tbody>
      </table>
    )
  }
}
