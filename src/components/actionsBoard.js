import React from 'react'
import PropTypes from 'prop-types'
import WorkerSpot from './workerSpot'
import ToolTrack from './toolTrack'
import './actionsBoard.css'

export default class ActionsBoard extends React.Component {
  static propTypes = {
    action: PropTypes.string,
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

  hasPlacedWorker = () => {
    const { workerSpaces, currentPlayer, phase } = this.props
    // need to || [], because the November/December/May/June spots are undefined
    const workersPrepSpot = workerSpaces[phase] || []
    const nextWorkerToPlace = workersPrepSpot[0]
    return nextWorkerToPlace !== parseInt(currentPlayer, 10)
  }

  isWinter = () => {
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

  isSummer = () => {
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

  summerAction = job => {
    const { moves, lighthouseUsed, action, workerSpaces } = this.props
    if (
      !(
        this.hasPlacedWorker() ||
        workerSpaces[job] !== null ||
        (lighthouseUsed && this.isWinter())
      )
    ) {
      return () => moves.action(job, this.isWinter())
    } else if (action === 'summerImitating' && workerSpaces[job] !== null) {
      return () => moves.option(job)
    }
  }

  winterAction = job => {
    const { moves, lighthouseUsed, action, workerSpaces } = this.props
    if (
      !(
        this.hasPlacedWorker() ||
        workerSpaces[job] !== null ||
        (lighthouseUsed && this.isSummer())
      )
    ) {
      return () => moves.action(job, this.isSummer())
    } else if (action === 'winterImitating' && workerSpaces[job] !== null) {
      return () => moves.option(job)
    }
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
            onClick={this.summerAction}
            job="fisherman"
            worker={workerSpaces.fisherman}
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
            onClick={this.winterAction}
            job="peatBoatman"
            label="Peat Boatman"
            worker={workerSpaces.peatBoatman}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="summerGrocer"
            label="Grocer"
            worker={workerSpaces.summerGrocer}
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
            onClick={this.winterAction}
            job="tanner"
            worker={workerSpaces.tanner}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="woolWeaver"
            label="Wool Weaver"
            worker={workerSpaces.woolWeaver}
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
            onClick={this.winterAction}
            job="linenWeaver"
            label="Linen Weaver"
            worker={workerSpaces.linenWeaver}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="colonist"
            worker={workerSpaces.colonist}
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
            onClick={this.winterAction}
            job="butcher"
            worker={workerSpaces.butcher}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="peatCutter"
            label="Peat Cutter"
            worker={workerSpaces.peatCutter}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack name="Spades" toolKey="spades" track={toolSpaces.spades} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="cattleTrader"
            label="Cattle Trader"
            worker={workerSpaces.cattleTrader}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="dikeBuilder"
            label="Dike Builder"
            worker={workerSpaces.dikeBuilder}
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
            onClick={this.winterAction}
            job="winterGrocer"
            label="Grocer"
            worker={workerSpaces.winterGrocer}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="clayWorker"
            label="Clay Worker"
            worker={workerSpaces.clayWorker}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="buildersMerchant"
            label="Build Merchant"
            worker={workerSpaces.buildersMerchant}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="farmer"
            worker={workerSpaces.farmer}
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
            onClick={this.winterAction}
            job="potter"
            worker={workerSpaces.potter}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            // TODO this should be disabled if the player has zero food
            onClick={this.summerAction}
            job="forester"
            worker={workerSpaces.forester}
          />
        </section>
        <section className="tool-winter">
          <ToolTrack name="Ovens" toolKey="ovens" track={toolSpaces.ovens} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="baker"
            worker={workerSpaces.baker}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="woodcutter"
            worker={workerSpaces.woodcutter}
          />
        </section>
        <section className="tool-summer">
          <ToolTrack name="Axes" toolKey="axes" track={toolSpaces.axes} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            // TODO this should be disabled if the player has zero food and zero grain
            onClick={this.winterAction}
            job="woodTrader"
            label="Wood Trader"
            worker={workerSpaces.woodTrader}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="summerMaster"
            label="Master"
            worker={workerSpaces.summerMaster}
          />
        </section>
        <section className="tool-both">
          <ToolTrack toolKey="workbenches" track={toolSpaces.workbenches} />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="winterMaster"
            label="Master"
            worker={workerSpaces.winterMaster}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="summerCarpenter"
            label="Carpenter"
            worker={workerSpaces.summerCarpenter}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="winterCarpenter"
            label="Carpenter"
            worker={workerSpaces.winterCarpenter}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="builder"
            worker={workerSpaces.builder}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="wainwright"
            worker={workerSpaces.wainwright}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={this.summerAction}
            job="warden"
            worker={workerSpaces.warden}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={this.winterAction}
            job="dikeWarden"
            label="Dike Warden"
            worker={workerSpaces.dikeWarden}
          />
        </section>
        <section className="action-summer">
          <WorkerSpot
            onClick={workerSpaces.summerLaborer ? undefined : this.summerAction}
            job="summerLaborer"
            label="Laborer"
            worker={workerSpaces.summerLaborer}
          />
        </section>
        <section className="action-winter">
          <WorkerSpot
            onClick={workerSpaces.winterLaborer ? undefined : this.winterAction}
            job="winterLaborer"
            label="Laborer"
            worker={workerSpaces.winterLaborer}
          />
        </section>
      </div>
    )
  }
}
