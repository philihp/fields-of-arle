import React from 'react'
import PropTypes from 'prop-types'

class Dornum extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Dornum will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('plow')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'plow')}
            >
              Plow
            </button>
            for 5 food
          </li>
        </ul>
      </div>
    )
  }
}

Dornum.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Dornum
