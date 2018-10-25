import React from 'react'
import PropTypes from 'prop-types'

class Leer extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Leer will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('flax')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'flax')}
            >
              1 flax
            </button>
            for 2 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] || !inventory.includes('linen')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'linen')}
            >
              Linen
            </button>
            for 3 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] || !inventory.includes('cattle')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'cattle')}
            >
              Cattle
            </button>
            for 5 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[3] ||
                !inventory.includes('summerWear')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'summerWear')}
            >
              Summer Wear
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[3] ||
                !inventory.includes('winterWear')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'winterWear')}
            >
              Winter Wear
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[3] ||
                !inventory.includes('leatherWear')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'leatherWear')}
            >
              Leather Wear
            </button>
            for 6 food
          </li>
        </ul>
      </div>
    )
  }
}

Leer.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Leer
