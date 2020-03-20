import React from 'react'
import GenericWorkshop from './genericWorkshop'

class NovicesHut extends GenericWorkshop {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Novice&rsquo;s Hut
        {this.usable() && (
          <div>
            <button
              onClick={this.useWorkshop}
              disabled={this.used()}
              type="button"
            >
              1 Grain &amp; 1 Dike
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default NovicesHut
