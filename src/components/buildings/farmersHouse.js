import React from 'react'
import PropTypes from 'prop-types'
import GenericWorkshop from './genericWorkshop'

class FarmersHouse extends GenericWorkshop {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const disabled = this.props.G.action !== null
    return (
      <div>
        Farmer's House
        {this.unused() && (
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

export default FarmersHouse
