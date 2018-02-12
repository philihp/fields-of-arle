import React from 'react'
import PropTypes from 'prop-types'
import './tool_track.css'

export default class ToolTrack extends React.Component {
  static propTypes = {
    values: PropTypes.array.isRequired,
    secondaryValues: PropTypes.array,
    track: PropTypes.any,
  }

  render() {
    return (
      <table className="ToolTrack">
        <thead>
          <tr>{this.props.values.map((v, i) => <th key={i}>{v}</th>)}</tr>
        </thead>
        <tbody>
          <tr>
            {this.props.values.map((v, i) => (
              <td key={i}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {i === this.props.track[0] && (
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
                  {i === this.props.track[1] && (
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
        {this.props.secondaryValues && (
          <thead>
            <tr>
              {this.props.secondaryValues.map((v, i) => <th key={i}>{v}</th>)}
            </tr>
          </thead>
        )}
      </table>
    )
  }
}
