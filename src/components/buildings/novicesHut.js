import React from 'react'
import PropTypes from 'prop-types'
import GenericBuilding from './genericBuilding'

class Workshop extends GenericBuilding {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>workshop</div>
  }
}

export default Workshop
