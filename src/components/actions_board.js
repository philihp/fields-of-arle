import React from 'react';
import PropTypes from 'prop-types';
import WorkerSpot from './worker_spot';
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    actions: PropTypes.any.isRequired,
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
            <td>
              <div>Fisherman</div>
              <WorkerSpot worker={this.props.actions.summer.fisherman} />
            </td>
            <td colSpan="2">Fish Traps</td>
            <td></td>
            <td>
              <div>Peat Boatman</div>
              <WorkerSpot worker={this.props.actions.winter.peatBoatman} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Grocer</div>
              <WorkerSpot worker={this.props.actions.summer.grocer} />
            </td>
            <td></td>
            <td colSpan="2">Fleshing Beams</td>
            <td>
              <div>Tanner</div>
              <WorkerSpot worker={this.props.actions.winter.tanner} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Wool Weaver</div>
              <WorkerSpot worker={this.props.actions.summer.woolWeaver} />
            </td>
            <td colSpan="3">Weaving Looms</td>
            <td>
              <div>Linen Weaver</div>
              <WorkerSpot worker={this.props.actions.winter.linenWeaver} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Colonist</div>
              <WorkerSpot worker={this.props.actions.summer.colonist} />
            </td>
            <td></td>
            <td colSpan="2">Slaughtering Tables</td>
            <td>
              <div>Butcher</div>
              <WorkerSpot worker={this.props.actions.winter.butcher} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Peat Cutter</div>
              <WorkerSpot worker={this.props.actions.summer.peatCutter} />
            </td>
            <td colSpan="2">Spades</td>
            <td></td>
            <td>
              <div>Cattle Trader</div>
              <WorkerSpot worker={this.props.actions.winter.cattleTrader} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Dike Builder</div>
              <WorkerSpot worker={this.props.actions.summer.dikeBuilder} />
            </td>
            <td colSpan="2" rowSpan="2">Shovel Pairs</td>
            <td></td>
            <td>
              <div>Grocer</div>
              <WorkerSpot worker={this.props.actions.winter.grocer} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Clay Worker</div>
              <WorkerSpot worker={this.props.actions.summer.clayWorker} />
            </td>
            <td></td>
            <td>
              <div>Builders' Merchant</div>
              <WorkerSpot worker={this.props.actions.winter.buildersMerchant} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Farmer</div>
              <WorkerSpot worker={this.props.actions.summer.farmer} />
            </td>
            <td></td>
            <td colSpan="2">Pottery Wheels</td>
            <td>
              <div>Potter</div>
              <WorkerSpot worker={this.props.actions.winter.potter} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Forester</div>
              <WorkerSpot worker={this.props.actions.summer.forester} />
            </td>
            <td></td>
            <td colSpan="2">Ovens</td>
            <td>
              <div>Baker</div>
              <WorkerSpot worker={this.props.actions.winter.baker} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Woodcutter</div>
              <WorkerSpot worker={this.props.actions.summer.woodcutter} />
            </td>
            <td colSpan="2">Axes</td>
            <td></td>
            <td>
              <div>Wood Trader</div>
              <WorkerSpot worker={this.props.actions.winter.woodTrader} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Master</div>
              <WorkerSpot worker={this.props.actions.summer.master} />
            </td>
            <td colSpan="3">Workbenches</td>
            <td>
              <div>Master</div>
              <WorkerSpot worker={this.props.actions.winter.master} />
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <div>Carpenter</div>
              <WorkerSpot worker={this.props.actions.summer.carpenter} />
            </td>
            <td>
              <div>Builder</div>
              <WorkerSpot worker={this.props.actions.summer.builder} />
            </td>
            <td></td>
            <td>
              <div>Wainwright</div>
              <WorkerSpot worker={this.props.actions.winter.wainwright} />
            </td>
            <td rowSpan="2">
              <div>Carpenter</div>
              <WorkerSpot worker={this.props.actions.winter.carpenter} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Warden</div>
              <WorkerSpot worker={this.props.actions.summer.warden} />
            </td>
            <td></td>
            <td>
              <div>Dike Warden</div>
              <WorkerSpot worker={this.props.actions.winter.dikeWarden} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div>Laborer</div>
              <WorkerSpot worker={this.props.actions.summer.laborer} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Laborer</div>
              <WorkerSpot worker={this.props.actions.winter.laborer} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
