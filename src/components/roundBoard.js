import React from 'react'
import PropTypes from 'prop-types'
import './roundBoard.css'

const RoundBoard = ({ round }) => {
  const rounds = Array.from({ length: 9 }, (v, k) => k + 1) // 1..9
  return (
    <table className="RoundBoard">
      <tbody>
        <tr>
          {rounds.map(v => {
            const selectedClass = round === v ? 'glow' : ''
            return (
              <td key={v} className={selectedClass}>
                {v}
              </td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}

RoundBoard.propTypes = {
  round: PropTypes.number.isRequired,
}

export default RoundBoard
