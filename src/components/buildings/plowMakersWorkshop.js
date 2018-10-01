import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class PlowMakersWorkshop extends GenericBuilding {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const isItNovember = this.props.ctx.phase === 'november'
    return (
      <div>
        Plow Maker's Workshop
        {isItNovember && (
          <div>
            <button type="button">Place Field</button>
          </div>
        )}
      </div>
    )
  }
}

export default PlowMakersWorkshop
