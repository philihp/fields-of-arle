import React from 'react';
import PropTypes from 'prop-types';
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
  }

  render() {
    return (
      <table className="ActionsBoard">
        <thead>
          <tr>
            <th>Summer</th>
            <th colSpan="3">Tools</th>
            <th>Winter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fisherman</td>
            <td colSpan="2">Fish Traps</td>
            <td></td>
            <td>Peat Boatman</td>
          </tr>
          <tr>
            <td>Grocer</td>
            <td></td>
            <td colSpan="2">Fleshing Beams</td>
            <td>Tanner</td>
          </tr>
          <tr>
            <td>Wool Weaver</td>
            <td colSpan="3">Weaving Looms</td>
            <td>Linen Weaver</td>
          </tr>
          <tr>
            <td>Colonist</td>
            <td></td>
            <td colSpan="2">Slaughtering Tables</td>
            <td>Butcher</td>
          </tr>
          <tr>
            <td>Peat Cutter</td>
            <td colSpan="2">Spades</td>
            <td></td>
            <td>Cattle Trader</td>
          </tr>
          <tr>
            <td>Dike Builder</td>
            <td colSpan="2" rowSpan="2">Shovel Pairs</td>
            <td></td>
            <td>Grocer</td>
          </tr>
          <tr>
            <td>Clay Worker</td>
            <td></td>
            <td>Builders' Merchant</td>
          </tr>
          <tr>
            <td>Farmer</td>
            <td></td>
            <td colSpan="2">Pottery Wheels</td>
            <td>Potter</td>
          </tr>
          <tr>
            <td>Forester</td>
            <td></td>
            <td colSpan="2">Ovens</td>
            <td>Baker</td>
          </tr>
          <tr>
            <td>Woodcutter</td>
            <td colSpan="2">Axes</td>
            <td></td>
            <td>Wood Trader</td>
          </tr>
          <tr>
            <td>Master</td>
            <td colSpan="3">Workbenches</td>
            <td>Master</td>
          </tr>
          <tr>
            <td rowSpan="2">Carpenter</td>
            <td>Builder</td>
            <td></td>
            <td>Wainwright</td>
            <td rowSpan="2">Carpenter</td>
          </tr>
          <tr>
            <td>Warden</td>
            <td></td>
            <td>Dike Warden</td>
          </tr>
          <tr>
            <td colSpan="2">Laborer</td>
            <td></td>
            <td colSpan="2">Laborer</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
