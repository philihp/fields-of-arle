import React from 'react'
import PropTypes from 'prop-types'

class Emden extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Emden will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] ||
                !inventory.includes('winterWear')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'winterWear')}
            >
              Winter Wear
            </button>
            for 7 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] ||
                !inventory.includes('leatherWear')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'leatherWear')}
            >
              Leather Wear
            </button>
            for 7 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] ||
                !inventory.includes('summerWear')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'summerWear')}
            >
              Summer Wear
            </button>
            for 6 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[3] || !inventory.includes('peat')
              }
              type="button"
              onClick={handleSellAtDestination(3, 'peat')}
            >
              Peat
            </button>
            for 3 food
          </li>
        </ul>
      </div>
    )
  }
}

Emden.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Emden
