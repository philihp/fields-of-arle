import React from 'react'
import PropTypes from 'prop-types'
import { toolValue, ToolUpgradeCosts } from '../../game/constants'
import { afford, spendInventory } from '../../game/common'

const workbenches = 'workbenches'

class WinterGrocer extends React.Component {
  constructor(props) {
    super(props)
    const {
      G,
      ctx: { currentPlayer },
    } = this.props
    this.state = {
      tools: [],
      inventory: G.players[currentPlayer].inventory,
      upgrades: toolValue(
        workbenches,
        G.toolSpaces[workbenches][currentPlayer]
      ),
      maxUpgrades: toolValue(
        workbenches,
        G.toolSpaces[workbenches][currentPlayer]
      ),
    }
  }

  handleUpgradeTool = tool => e => {
    if (this.state.upgrades <= 0) return
    this.setState({
      tools: [...this.state.tools, tool],
      inventory: spendInventory(this.state.inventory, ToolUpgradeCosts[tool]),
      upgrades: this.state.upgrades - (tool !== 'workbenches' ? 1 : 0),
      maxUpgrades: this.state.maxUpgrades + (tool === 'workbenches' ? 1 : 0),
    })
  }

  sendMoveOptions = e => {
    this.props.moves.option(...this.state.tools)
  }

  render() {
    return (
      <div>
        Tool Upgrades
        <br /> Remaining: {this.state.upgrades} of {this.state.maxUpgrades}
        <br />
        <br />
        Upgrades: [{this.state.tools.join(', ')}]<br />
        Inventory: [{this.state.inventory.join(', ')}]<br />
        {Object.keys(ToolUpgradeCosts).map(tool => (
          <div key={tool}>
            <button
              disabled={
                !afford(this.state.inventory, ToolUpgradeCosts[tool]) ||
                this.state.upgrades <= 0 ||
                this.state.tools.includes(tool)
              }
              onClick={this.handleUpgradeTool(tool)}
            >
              {tool} - {ToolUpgradeCosts[tool]}
            </button>
            <br />
          </div>
        ))}
        <br />
        <button onClick={this.sendMoveOptions}>
          <b>Engage</b>
        </button>
      </div>
    )
  }
}

WinterGrocer.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: WinterGrocer,
}
