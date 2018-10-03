import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class FarmersHouse extends GenericBuilding {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Farmers House</div>
  }
}

export default FarmersHouse
