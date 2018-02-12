import React from 'react'
import PropTypes from 'prop-types'
import './home_board.css'

export default class HomeBoard extends React.Component {
  static propTypes = {
    player: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div>
        Peat: {this.props.player.peat}
        <br />
        Wood: {this.props.player.wood}
        <br />
        Clay: {this.props.player.clay}
        <br />
        <table className="HomeBoard">
          <tbody>
            {this.props.player.land.map((row, i) => (
              <tr key={i}>
                {row.map((cell, i) => <td key={i}>{cell && cell.type}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
