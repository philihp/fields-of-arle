import React from 'react'
import PropTypes from 'prop-types'
import GenericWorkshop from './genericWorkshop'

class FarmersHouse extends GenericWorkshop {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Farmer's House
        {this.usable() && (
          <div>
            <button
              onClick={this.useWorkshop}
              disabled={this.used()}
              type="button"
            >
              1 Clay &amp; Cut Peat
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default FarmersHouse
