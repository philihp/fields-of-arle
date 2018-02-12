import React from 'react'
import PropTypes from 'prop-types'
import './home_board.css'

const HomeBoard = props => (
  <div>
    Peat: {props.player.peat}
    <br />
    Wood: {props.player.wood}
    <br />
    Clay: {props.player.clay}
    <br />
    <table className="HomeBoard">
      <tbody>
        {props.player.land.map((row, i) => (
          <tr key={i}>
            {row.map((cell, i) => <td key={i}>{cell && cell.type}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

HomeBoard.propTypes = {
  player: PropTypes.any.isRequired,
}

export default HomeBoard
