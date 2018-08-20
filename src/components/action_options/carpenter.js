import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'
import TableauFarm from '../tableau_farm'

const affordStall = player =>
  player.goods.grain >= 1 && afford(player.inventory, ['clay', 'clay'])
const affordStable = player => afford(player.inventory, ['brick', 'brick'])

class Carpenter extends React.Component {
  constructor(props) {
    super()
    // const { G, ctx, moves } = props
    this.state = {
      mode: null,
    }
  }

  handleButton = mode => e => {
    this.setState({ mode })
  }

  handleBuild = (row, col) => e => {
    this.props.moves.option({ row, col })
  }

  handleSelectBuild = () => e => {
    this.props.moves.option({ action: 'build' })
  }

  render() {
    const { G, ctx } = this.props
    const player = G.players[ctx.currentPlayer]
    switch (this.state.mode) {
      case 'stall':
        return (
          <div>
            <button onClick={this.handleButton(null)}>Back</button>
            <TableauFarm
              land={player.land}
              dikes={player.dikes}
              handleBuildStall={
                affordStall(player) && G.supplies.stallDepot > 0
                  ? this.handleBuild
                  : null
              }
              handleBuildStable={
                affordStable(player) && G.supplies.stableDoubleStall > 0
                  ? this.handleBuild
                  : null
              }
            />
          </div>
        )
      case 'stable':
        return (
          <div>
            <button onClick={this.handleButton(null)}>Back</button>
            <TableauFarm
              land={player.land}
              dikes={player.dikes}
              handleBuildStall={
                affordStall(player) && G.supplies.stallDepot > 0
                  ? this.handleBuild
                  : null
              }
              handleBuildStable={
                affordStable(player) && G.supplies.stableDoubleStall > 0
                  ? this.handleBuild
                  : null
              }
            />
          </div>
        )
      default:
        return (
          <div>
            <button
              disabled={!affordStall(player)}
              onClick={this.handleButton('stall')}
            >
              Build Stall
            </button>
            <button
              disabled={!affordStable(player)}
              onClick={this.handleButton('stable')}
            >
              Build Stable
            </button>
            <button onClick={this.handleSelectBuild()}>Build Building</button>
          </div>
        )
    }
  }
}

Carpenter.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default Carpenter
