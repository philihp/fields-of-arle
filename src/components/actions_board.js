import React from 'react';
import PropTypes from 'prop-types';
import WorkerSpot from './worker_spot';
import ToolTrack from './tool_track';
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    workerSpaces: PropTypes.any.isRequired,
    toolSpaces: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    game: PropTypes.any.isRequired,
    currentPlayer: PropTypes.any.isRequired,
    phase: PropTypes.string.isRequired,
  }

  summerAction(job) {
    if(this.props.workerSpaces[job] !== null) return
    if(this.props.workerSpaces[this.props.phase][0] != this.props.currentPlayer) return
    this.props.moves.summerAction(job);
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
              <WorkerSpot worker={this.props.workerSpaces.fisherman} />
            </td>
            <td colSpan="2">
              <div>Fish Traps</div>
              <ToolTrack values={[2,3,4,5,6]} track={this.props.toolSpaces.fishTraps} />
            </td>
            <td></td>
            <td>
              <div>Peat Boatman</div>
              <WorkerSpot worker={this.props.workerSpaces.peatBoatman} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Grocer</div>
              <WorkerSpot worker={this.props.workerSpaces.grocer} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Fleshing Beams</div>
              <ToolTrack values={[3,5,6]} track={this.props.toolSpaces.fleshingBeams} />
            </td>
            <td>
              <div>Tanner</div>
              <WorkerSpot worker={this.props.workerSpaces.tanner} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Wool Weaver</div>
              <WorkerSpot worker={this.props.workerSpaces.woolWeaver} />
            </td>
            <td colSpan="3">
              <div>Weaving Looms</div>
              <ToolTrack values={[2,3,4,5]} track={this.props.toolSpaces.weavingLooms} />
            </td>
            <td>
              <div>Linen Weaver</div>
              <WorkerSpot worker={this.props.workerSpaces.linenWeaver} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Colonist</div>
              <WorkerSpot worker={this.props.workerSpaces.colonist} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Slaughtering Tables</div>
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.slaughteringTables} />
            </td>
            <td>
              <div>Butcher</div>
              <WorkerSpot worker={this.props.workerSpaces.butcher} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Peat Cutter</div>
              <WorkerSpot worker={this.props.workerSpaces.peatCutter} />
            </td>
            <td colSpan="2">
              <div>Spades</div>
              <ToolTrack values={[3,5,7]} track={this.props.toolSpaces.spades} />
            </td>
            <td></td>
            <td>
              <div>Cattle Trader</div>
              <WorkerSpot worker={this.props.workerSpaces.cattleTrader} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Dike Builder</div>
              <WorkerSpot worker={this.props.workerSpaces.dikeBuilder} />
            </td>
            <td colSpan="2" rowSpan="2">
              <div>Shovel Pairs</div>
              <ToolTrack values={[1,2,2,3]} secondaryValues={[3,4,5,6]} track={this.props.toolSpaces.shovelPairs} />
            </td>
            <td></td>
            <td>
              <div>Grocer</div>
              <WorkerSpot worker={this.props.workerSpaces.grocer} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Clay Worker</div>
              <WorkerSpot worker={this.props.workerSpaces.clayWorker} />
            </td>
            <td></td>
            <td>
              <div>Builders' Merchant</div>
              <WorkerSpot worker={this.props.workerSpaces.buildersMerchant} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Farmer</div>
              <WorkerSpot worker={this.props.workerSpaces.farmer} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Pottery Wheels</div>
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.potteryWheels} />
            </td>
            <td>
              <div>Potter</div>
              <WorkerSpot worker={this.props.workerSpaces.potter} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Forester</div>
              <WorkerSpot worker={this.props.workerSpaces.forester} />
            </td>
            <td></td>
            <td colSpan="2">
              <div>Ovens</div>
              <ToolTrack values={[1,2,3,4]} track={this.props.toolSpaces.ovens} />
            </td>
            <td>
              <div>Baker</div>
              <WorkerSpot worker={this.props.workerSpaces.baker} />
            </td>
          </tr> */}
          <tr>
            <td>
              <div>Woodcutter</div>
              <WorkerSpot worker={this.props.workerSpaces.woodcutter} />
              <button onClick={() => this.summerAction('woodcutter')}>Use</button>
            </td>
            <td colSpan="2">
              <div>Axes</div>
              <ToolTrack values={[3,4,5,6]} track={this.props.toolSpaces.axes} />
            </td>
            <td></td>
            <td>
              <div>Wood Trader</div>
              <WorkerSpot worker={this.props.workerSpaces.woodTrader} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Master</div>
              <WorkerSpot worker={this.props.workerSpaces.summerMaster}/>
              <button onClick={() => this.summerAction('summerMaster')}>Use</button>
            </td>
            <td colSpan="3">
              <div>Workbenches</div>
              <ToolTrack values={[2,3,4]} track={this.props.toolSpaces.workbenches} />
            </td>
            <td>
              <div>Master</div>
              <WorkerSpot worker={this.props.workerSpaces.winterMaster} />
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <div>Carpenter</div>
              <WorkerSpot worker={this.props.workerSpaces.summerCarpenter} />
              <button onClick={() => this.summerAction('summerCarpenter')}>Use</button>
            </td>
            <td>
              <div>Builder</div>
              <WorkerSpot worker={this.props.workerSpaces.builder} />
              <button onClick={() => this.summerAction('builder')}>Use</button>
            </td>
            <td></td>
            <td>
              <div>Wainwright</div>
              <WorkerSpot worker={this.props.workerSpaces.wainwright} />
            </td>
            <td rowSpan="2">
              <div>Carpenter</div>
              <WorkerSpot worker={this.props.workerSpaces.winterCarpenter} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Warden</div>
              <WorkerSpot worker={this.props.workerSpaces.warden} />
              <button onClick={() => this.summerAction('warden')}>Use</button>
            </td>
            <td></td>
            <td>
              <div>Dike Warden</div>
              <WorkerSpot worker={this.props.workerSpaces.dikeWarden} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div>Laborer</div>
              <WorkerSpot worker={this.props.workerSpaces.summerLaborer} />
              <button onClick={() => this.summerAction('summerLaborer')}>Use</button>
            </td>
            <td></td>
            <td colSpan="2">
              <div>Laborer</div>
              <WorkerSpot worker={this.props.workerSpaces.winterLaborer} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
