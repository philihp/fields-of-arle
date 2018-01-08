import React from 'react';
import PropTypes from 'prop-types';
import WorkerSpot from './worker_spot';
import ToolTrack from './tool_track';
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    actions: PropTypes.any.isRequired,
    tools: PropTypes.any.isRequired,
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
          {/* <tr>
            <td>
              <div>Fisherman</div>
              <WorkerSpot worker={this.props.actions.summer.fisherman} />
            </td>
            <td colSpan="2">
              <div>Fish Traps</div>
              <ToolTrack values={[2,3,4,5,6]} track={this.props.tools.fishTraps} />
            </td>
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
            <td colSpan="2">
              <div>Fleshing Beams</div>
              <ToolTrack values={[3,5,6]} track={this.props.tools.fleshingBeams} />
            </td>
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
            <td colSpan="3">
              <div>Weaving Looms</div>
              <ToolTrack values={[2,3,4,5]} track={this.props.tools.weavingLooms} />
            </td>
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
            <td colSpan="2">
              <div>Slaughtering Tables</div>
              <ToolTrack values={[2,3,4]} track={this.props.tools.slaughteringTables} />
            </td>
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
            <td colSpan="2">
              <div>Spades</div>
              <ToolTrack values={[3,5,7]} track={this.props.tools.spades} />
            </td>
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
            <td colSpan="2" rowSpan="2">
              <div>Shovel Pairs</div>
              <ToolTrack values={[1,2,2,3]} secondaryValues={[3,4,5,6]} track={this.props.tools.shovelPairs} />
            </td>
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
            <td colSpan="2">
              <div>Pottery Wheels</div>
              <ToolTrack values={[2,3,4]} track={this.props.tools.potteryWheels} />
            </td>
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
            <td colSpan="2">
              <div>Ovens</div>
              <ToolTrack values={[1,2,3,4]} track={this.props.tools.ovens} />
            </td>
            <td>
              <div>Baker</div>
              <WorkerSpot worker={this.props.actions.winter.baker} />
            </td>
          </tr> */}
          <tr>
            <td>
              <div>Woodcutter</div>
              <WorkerSpot worker={this.props.actions.summer.woodcutter} />
            </td>
            <td colSpan="2">
              <div>Axes</div>
              <ToolTrack values={[3,4,5,6]} track={this.props.tools.axes} />
            </td>
            <td></td>
            <td>
              <div>Wood Trader</div>
              <WorkerSpot worker={this.props.actions.winter.woodTrader} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Master</div>
              <WorkerSpot worker={this.props.actions.summer.master}/>
            </td>
            <td colSpan="3">
              <div>Workbenches</div>
              <ToolTrack values={[2,3,4]} track={this.props.tools.workbenches} />
            </td>
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
