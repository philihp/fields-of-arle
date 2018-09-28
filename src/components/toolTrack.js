import React from 'react'
import PropTypes from 'prop-types'
import { ToolUpgradeCosts, ToolIncrements } from '../game/constants'
import './toolTrack.css'

const ToolTrack = ({ toolKey, track, name }) => {
  const values = ToolIncrements[toolKey]
  const cost = ToolUpgradeCosts[toolKey]
  return (
    <div>
      {/* TODO this is a quick "cost", do something better later */}
      <div style={{ position: 'absolute', zIndex: -1 }}>
        {cost.map((v, i) => (
          <span key={i}>{v[0]}</span>
        ))}
      </div>
      <table className="ToolTrack">
        <tbody>
          <tr>
            {values.map((v, i) => (
              <td key={v}>
                {v}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {i === track[0] && (
                    <g>
                      <path
                        d="M 3 45 V 65 A 47 20 0 0 0 50 85 A 47 20 0 0 0 97 65 V 45"
                        stroke="#e64505"
                        strokeWidth="3"
                        fill="#fc8d62"
                      />
                      <ellipse
                        cx="50"
                        cy="45"
                        rx="47"
                        ry="20"
                        stroke="#e64505"
                        strokeWidth="3"
                        fill="#fc8d62"
                      />
                    </g>
                  )}
                  {i === track[1] && (
                    <g>
                      <path
                        d="M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
                        stroke="#c7a200"
                        strokeWidth="3"
                        fill="#ffd92f"
                      />
                      <ellipse
                        cx="50"
                        cy="25"
                        rx="47"
                        ry="20"
                        stroke="#c7a200"
                        strokeWidth="3"
                        fill="#ffd92f"
                      />
                    </g>
                  )}
                </svg>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ToolTrack.propTypes = {
  toolKey: PropTypes.string.isRequired,
  track: PropTypes.any,
  name: PropTypes.string,
}

export default ToolTrack
