import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class PlowMakersWorkshop extends GenericBuilding {
  constructor(props) {
    super(props)
    this.state = {}
  }

  useWorkshop = () => {
    const { moves } = this.props
    moves.workshop('plowMakersWorkshop')
  }

  render() {
    const unused = this.props.G.unusedWorkshops[
      this.props.ctx.currentPlayer
    ].includes('plowMakersWorkshop')
    const disabled = this.props.G.workshop !== null
    return (
      <div>
        Plow Maker's Workshop
        {unused && (
          <div>
            <button
              onClick={this.useWorkshop}
              disabled={disabled}
              type="button"
            >
              Place Field
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default PlowMakersWorkshop
