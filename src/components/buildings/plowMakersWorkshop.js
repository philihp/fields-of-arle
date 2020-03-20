import React from 'react'
import GenericWorkshop from './genericWorkshop'

class PlowMakersWorkshop extends GenericWorkshop {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Plow Maker&rsquo;s Workshop
        {this.usable() && (
          <div>
            <button
              onClick={this.useWorkshop}
              disabled={this.used()}
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
