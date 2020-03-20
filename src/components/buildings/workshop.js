import React from 'react'
import GenericWorkshop from './genericWorkshop'

class Workshop extends GenericWorkshop {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Workshop
        {this.usable() && (
          <div>
            <button
              onClick={this.useWorkshop}
              disabled={this.used()}
              type="button"
            >
              wood master
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Workshop
