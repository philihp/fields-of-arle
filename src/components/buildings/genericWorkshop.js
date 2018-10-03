import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class GenericWorkshop extends GenericBuilding {
  unused = () => {
    const {
      type,
      G: { unusedWorkshops },
      ctx: { currentPlayer },
    } = this.props
    return unusedWorkshops[currentPlayer].includes(type)
  }

  useWorkshop = () => {
    const { moves, type } = this.props
    moves.workshop(type)
  }
}

export default GenericWorkshop
