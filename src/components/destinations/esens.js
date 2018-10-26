import React from 'react'
import PropTypes from 'prop-types'

const sumGrain = (a, i) => (i === 'grain' ? 1 + a : a)

class Esens extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    return (
      <div>
        <b>Sellers at Esens will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] ||
                inventory.reduce(sumGrain, 0) < 2
              }
              type="button"
              onClick={handleSellAtDestination(0, 'grain', 'grain')}
            >
              2x Grain
            </button>
            for 4 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] || !inventory.includes('hide')
              }
              type="button"
              onClick={handleSellAtDestination(1, 'hide')}
            >
              Hide
            </button>
            for 2 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] || !inventory.includes('woolen')
              }
              type="button"
              onClick={handleSellAtDestination(2, 'woolen')}
            >
              Woolen
            </button>
            for 4 food
          </li>
        </ul>
      </div>
    )
  }
}

Esens.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Esens
