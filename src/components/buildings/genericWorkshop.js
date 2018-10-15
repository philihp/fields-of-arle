import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class GenericWorkshop extends GenericBuilding {
  usable = () => {
    const { activePlayer, phase } = this.props
    if (activePlayer === false) return false
    if (phase !== 'preNovember') return false
    return true
  }

  used = () => {
    const { type, usedWorkshops } = this.props
    return usedWorkshops !== undefined && usedWorkshops.includes(type)
  }

  // disabled = () => this.props.G !== undefined && this.props.G.action !== null

  useWorkshop = () => {
    const { moves, type } = this.props
    moves.workshop(type)
  }
}

export default GenericWorkshop
