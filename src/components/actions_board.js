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
      <div className="ActionsBoard">
        <header>Summer</header>
        <header className="tools">Tools</header>
        <header>Winter</header>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="fisherman"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack
            name="Fish Traps"
            toolKey="fishTraps"
            track={this.props.toolSpaces.fishTraps}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="peatBoatman"
            label="Peat Boatman"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerGrocer"
            label="Grocer"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Fleshing Beams"
            toolKey="fleshingBeams"
            track={this.props.toolSpaces.fleshingBeams}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="tanner"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="woolWeaver"
            label="Wool Weaver"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-both">
          <ToolTrack
            name="Weaving Looms"
            toolKey="weavingLooms"
            track={this.props.toolSpaces.weavingLooms}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="linenWeaver"
            label="Linen Weaver"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="colonist"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Slaughtering Tables"
            toolKey="slaughteringTables"
            track={this.props.toolSpaces.slaughteringTables}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="butcher"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="peatCutter"
            label="Peat Cutter"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack
            name="Spades"
            toolKey="spades"
            track={this.props.toolSpaces.spades}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="cattleTrader"
            label="Cattle Trader"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="dikeBuilder"
            label="Dike Builder"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-summer double-row">
          <ToolTrack
            name="Shovels (Pairs)"
            toolKey="shovels"
            track={this.props.toolSpaces.shovels}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterGrocer"
            label="Grocer"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="clayWorker"
            label="Clay Worker"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="buildersMerchant"
            label="Builders' Merchant"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="farmer"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Pottery Wheels"
            toolKey="potteryWheels"
            track={this.props.toolSpaces.potteryWheels}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="potter"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="forester"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Ovens"
            toolKey="ovens"
            track={this.props.toolSpaces.ovens}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="baker"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="woodcutter"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack
            name="Axes"
            toolKey="axes"
            track={this.props.toolSpaces.axes}
          />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="woodTrader"
            label="Wood Trader"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerMaster"
            label="Master"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="tool-both">
          <ToolTrack
            toolKey="workbenches"
            track={this.props.toolSpaces.workbenches}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterMaster"
            label="Master"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerCarpenter"
            label="Carpenter"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterCarpenter"
            label="Carpenter"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="builder"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="wainwright"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="warden"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="dikeWarden"
            label="Dike Warden"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerLaborer"
            label="Laborer"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterLaborer"
            label="Laborer"
            workerSpaces={this.props.workerSpaces}
          />
        </section>
      </div>
    )
  }
}
