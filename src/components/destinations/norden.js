import React from 'react'
import PropTypes from 'prop-types'

class Norden extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Norden will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('sheep')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'sheep')}
            >
              Sheep
            </button>
            for 4 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] ||
                !inventory.includes('winterWear')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'winterWear')}
            >
              Winter Wear
            </button>
            for 7 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] ||
                !inventory.includes('peatBoat')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'peatBoat')}
            >
              Peat Boat
            </button>
            for 5 food
          </li>
        </ul>
      </div>
    )
  }
}

Norden.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Norden
