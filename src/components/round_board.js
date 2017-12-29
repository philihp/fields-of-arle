import React from 'react';
import PropTypes from 'prop-types';
import './round_board.css'

export default class RoundBoard extends React.Component {
  static propTypes = {
    round: PropTypes.number.isRequired,
  }

  render() {
    let rounds = Array.from({length: (9)}, (v, k) => k + 1) // 1..9
    return (
      <table className="RoundBoard">
        <tbody>
          <tr>
            {rounds.map((v) =>
              (
                <td key={v}>
                  {v}<br />
                  {this.props.round === v && (
                    <b>X</b>
                  )}
                </td>
              )
            )}
          </tr>
        </tbody>
      </table>
    )
  }
}
