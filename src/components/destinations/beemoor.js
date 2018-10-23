import React from 'react'
import PropTypes from 'prop-types'

class Beemoor extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <br />
        <b>Sellers at Beemoor will buy:</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('peat')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'peat')}
            >
              Peat
            </button>
            for 2 food
          </li>
        </ul>
      </div>
    )
  }
}

Beemoor.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Beemoor
