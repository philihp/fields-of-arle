import React from 'react'
import workshop from './workshop'

export class UnknownBuilding extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { type } = this.props
    return <b>{type !== 'empty' && type}</b>
  }
}

// Exhaustive list of all of the buildings

export default {
  workshop,
}
