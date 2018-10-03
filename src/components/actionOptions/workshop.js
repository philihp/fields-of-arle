import React from 'react'
import PropTypes from 'prop-types'
import { toolValue, ToolUpgradeCosts } from '../../game/constants'
import { afford, spendInventory } from '../../game/common'

const workbenches = 'workbenches'

class Workshop extends React.Component {
  handleMaster = tool => e => {
    const { moves } = this.props
    moves.option({ tool })
  }

  handleSkipMaster = e => {
    const { moves } = this.props
    moves.option()
  }

  render() {
    const {
      G,
      ctx: { currentPlayer },
    } = this.props
    const inventory = G.players[currentPlayer].inventory
    return (
      <div>
        Workshop
        <br />
        Inventory: [{inventory.join(', ')}]<br />
        {Object.keys(ToolUpgradeCosts).map(tool => (
          <div key={tool}>
            <button
              disabled={!afford(inventory, ToolUpgradeCosts[tool])}
              type="button"
              onClick={this.handleMaster(tool)}
            >
              {tool} - {ToolUpgradeCosts[tool]}
            </button>
            <br />
          </div>
        ))}
        <br />
        <button type="button" onClick={this.handleSkipMaster}>
          <b>Skip Master</b>
        </button>
      </div>
    )
  }
}

Workshop.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Workshop,
}
