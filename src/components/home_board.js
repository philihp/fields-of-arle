import React from 'react';
import PropTypes from 'prop-types';
import './home_board.css'

export default class HomeBoard extends React.Component {
  static propTypes = {
    contents: PropTypes.any.isRequired,
  }

  render() {
    return (
      <table className="HomeBoard">
        <tbody>
          {this.props.contents.land.map((row,i) =>
            (
              <tr key={i}>
                {row.map((cell,i) =>
                  (
                    <td key={i}>
                      {cell && cell.type}
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    )
  }
}
