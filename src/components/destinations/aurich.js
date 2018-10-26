import React from 'react'
import PropTypes from 'prop-types'

class Aurich extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Aurich will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('leather')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'leather')}
            >
              Leather
            </button>
            for 4 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] || !inventory.includes('sheep')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'sheep')}
            >
              Sheep
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[1] || !inventory.includes('cattle')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'cattle')}
            >
              Cattle
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[1] || !inventory.includes('horse')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'horse')}
            >
              Horse
            </button>
            for 4 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] || !inventory.includes('horse')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'horse')}
            >
              Horse
            </button>
            for 5 food
          </li>
        </ul>
      </div>
    )
  }
}

Aurich.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Aurich
