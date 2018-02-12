import React from 'react'
import PropTypes from 'prop-types'
import WorkerSpot from './worker_spot'
import ToolTrack from './tool_track'
import './actions_board.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    workerSpaces: PropTypes.any.isRequired,
    toolSpaces: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    currentPlayer: PropTypes.any.isRequired,
    phase: PropTypes.string.isRequired,
    lighthouseUsed: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.summerAction = this.summerAction.bind(this)
    this.winterAction = this.winterAction.bind(this)
  }

  hasPlacedWorker() {
    // need to || [], because the November/December/May/June spots are undefined
    let workersPrepSpot = this.props.workerSpaces[this.props.phase] || []
    let nextWorkerToPlace = workersPrepSpot[0]
    let currentPlayer = parseInt(this.props.currentPlayer, 10)
    return nextWorkerToPlace !== currentPlayer
  }

  isWinter() {
    return [
      'december',
      'january',
      'february',
      'march',
      'april',
      'may',
    ].includes(this.props.phase)
  }

  isSummer() {
    return [
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
    ].includes(this.props.phase)
  }

  canPlaceInSummer() {
    return (
      (!this.props.lighthouseUsed || this.isSummer()) && !this.hasPlacedWorker()
    )
  }

  canPlaceInWinter() {
    return (
      (!this.props.lighthouseUsed || this.isWinter()) && !this.hasPlacedWorker()
    )
  }

  summerAction(job) {
    this.props.moves.action(job, this.isWinter())
  }

  winterAction(job) {
    this.props.moves.action(job, this.isSummer())
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
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="fisherman"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="2">
              <div>Fish Traps</div>
              <ToolTrack
                values={[2, 3, 4, 5, 6]}
                track={this.props.toolSpaces.fishTraps}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="peatBoatman"
                label="Peat Boatman"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="summerGrocer"
                label="Winter Grocer"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td colSpan="2">
              <div>Fleshing Beams</div>
              <ToolTrack
                values={[3, 5, 6]}
                track={this.props.toolSpaces.fleshingBeams}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="tanner"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="woolWeaver"
                label="Wool Weaver"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="3">
              <div>Weaving Looms</div>
              <ToolTrack
                values={[2, 3, 4, 5]}
                track={this.props.toolSpaces.weavingLooms}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="linenWeaver"
                label="Linen Weaver"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="colonist"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td colSpan="2">
              <div>Slaughtering Tables</div>
              <ToolTrack
                values={[2, 3, 4]}
                track={this.props.toolSpaces.slaughteringTables}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="butcher"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="peatCutter"
                label="Peat Cutter"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="2">
              <div>Spades</div>
              <ToolTrack
                values={[3, 5, 7]}
                track={this.props.toolSpaces.spades}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="cattleTrader"
                label="Cattle Trader"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="dikeBuilder"
                label="Dike Builder"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="2" rowSpan="2">
              <div>Shovel Pairs</div>
              <ToolTrack
                values={[1, 2, 2, 3]}
                secondaryValues={[3, 4, 5, 6]}
                track={this.props.toolSpaces.shovelPairs}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="winterGrocer"
                label="Grocer"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="clayWorker"
                label="Clay Worker"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.winterAction}
                job="buildersMerchant"
                label="Builders' Merchant"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="farmer"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td colSpan="2">
              <div>Pottery Wheels</div>
              <ToolTrack
                values={[2, 3, 4]}
                track={this.props.toolSpaces.potteryWheels}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="potter"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="forester"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td colSpan="2">
              <div>Ovens</div>
              <ToolTrack
                values={[1, 2, 3, 4]}
                track={this.props.toolSpaces.ovens}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="baker"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="woodcutter"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="2">
              <div>Axes</div>
              <ToolTrack
                values={[3, 4, 5, 6]}
                track={this.props.toolSpaces.axes}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="woodTrader"
                label="Wood Trader"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="summerMaster"
                label="Master"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td colSpan="3">
              <ToolTrack
                values={[2, 3, 4]}
                track={this.props.toolSpaces.workbenches}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="winterMaster"
                label="Master"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="summerCarpenter"
                label="Carpenter"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="builder"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="wainwright"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td rowSpan="2">
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="winterCarpenter"
                label="Carpenter"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="warden"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td>
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="dikeWarden"
                label="Dike Warden"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <WorkerSpot
                disabled={!this.canPlaceInSummer()}
                onClick={this.summerAction}
                job="summerLaborer"
                label="Laborer"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
            <td />
            <td colSpan="2">
              <WorkerSpot
                disabled={!this.canPlaceInWinter()}
                onClick={this.winterAction}
                job="winterLaborer"
                label="Laborer"
                workerSpaces={this.props.workerSpaces}
              />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
