import React from 'react'
import PropTypes from 'prop-types'
import WorkerSpot from './workerSpot'
import ToolTrack from './toolTrack'
import './actionsBoard.css'

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
    const { workerSpaces, currentPlayer, phase } = this.props
    // need to || [], because the November/December/May/June spots are undefined
    const workersPrepSpot = workerSpaces[phase] || []
    const nextWorkerToPlace = workersPrepSpot[0]
    return nextWorkerToPlace !== parseInt(currentPlayer, 10)
  }

  isWinter() {
    const { phase } = this.props
    return [
      'december',
      'january',
      'february',
      'march',
      'april',
      'may',
    ].includes(phase)
  }

  isSummer() {
    const { phase } = this.props
    return [
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
    ].includes(phase)
  }

  canPlaceInSummer() {
    const { lighthouseUsed } = this.props
    return (!lighthouseUsed || this.isSummer()) && !this.hasPlacedWorker()
  }

  canPlaceInWinter() {
    const { lighthouseUsed } = this.props
    return (!lighthouseUsed || this.isWinter()) && !this.hasPlacedWorker()
  }

  summerAction(job) {
    const { moves } = this.props
    moves.action(job, this.isWinter())
  }

  winterAction(job) {
    const { moves } = this.props
    moves.action(job, this.isSummer())
  }

  render() {
    const { workerSpaces, toolSpaces } = this.props
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
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack
            name="Fish Traps"
            toolKey="fishTraps"
            track={toolSpaces.fishTraps}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="peatBoatman"
            label="Peat Boatman"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerGrocer"
            label="Grocer"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Fleshing Beams"
            toolKey="fleshingBeams"
            track={toolSpaces.fleshingBeams}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="tanner"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="woolWeaver"
            label="Wool Weaver"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-both">
          <ToolTrack
            name="Weaving Looms"
            toolKey="weavingLooms"
            track={toolSpaces.weavingLooms}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="linenWeaver"
            label="Linen Weaver"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="colonist"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Slaughtering Tables"
            toolKey="slaughteringTables"
            track={toolSpaces.slaughteringTables}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="butcher"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="peatCutter"
            label="Peat Cutter"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack name="Spades" toolKey="spades" track={toolSpaces.spades} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="cattleTrader"
            label="Cattle Trader"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="dikeBuilder"
            label="Dike Builder"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-summer double-row">
          <ToolTrack
            name="Shovels (Pairs)"
            toolKey="shovels"
            track={toolSpaces.shovels}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterGrocer"
            label="Grocer"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="clayWorker"
            label="Clay Worker"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="buildersMerchant"
            label="Builders' Merchant"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="farmer"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack
            name="Pottery Wheels"
            toolKey="potteryWheels"
            track={toolSpaces.potteryWheels}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="potter"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="forester"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack name="Ovens" toolKey="ovens" track={toolSpaces.ovens} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="baker"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="woodcutter"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack name="Axes" toolKey="axes" track={toolSpaces.axes} />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="woodTrader"
            label="Wood Trader"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerMaster"
            label="Master"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="tool-both">
          <ToolTrack toolKey="workbenches" track={toolSpaces.workbenches} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterMaster"
            label="Master"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerCarpenter"
            label="Carpenter"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterCarpenter"
            label="Carpenter"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="builder"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="wainwright"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="warden"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="dikeWarden"
            label="Dike Warden"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-summer not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInSummer()}
            onClick={this.summerAction}
            job="summerLaborer"
            label="Laborer"
            workerSpaces={workerSpaces}
          />
        </section>
        <section className="action-winter not-implemented">
          <WorkerSpot
            disabled={!this.canPlaceInWinter()}
            onClick={this.winterAction}
            job="winterLaborer"
            label="Laborer"
            workerSpaces={workerSpaces}
          />
        </section>
      </div>
    )
  }
}
