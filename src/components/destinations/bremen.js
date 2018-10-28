import React from 'react'
import PropTypes from 'prop-types'

const isMoor = s => s.match(/^(boardwalk|moor-)/)

const countOf = animal => (a, i) => (i === animal ? a + 1 : a)

const hasFabricSet = inventory =>
  inventory.includes('woolen') &&
  inventory.includes('linen') &&
  inventory.includes('leather')

const hasClothesSet = inventory =>
  inventory.includes('winterWear') &&
  inventory.includes('summerWear') &&
  inventory.includes('leatherWear')

class Bremen extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    const moors = inventory.filter(isMoor)
    return (
      <div>
        <b>Sellers at Bremen will buy (pick at least one):</b>
        <ul>
          <li>
            <button
              disabled={
                this.props.conversionInputs[0] || !inventory.includes('timber')
              }
              type="button"
              onClick={handleSellAtDestination(0, 'timber')}
            >
              Timber
            </button>
            for 5 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[1] ||
                inventory.reduce(countOf('sheep'), 0) < 2
              }
              type="button"
              onClick={handleSellAtDestination(1, 'sheep', 'sheep')}
            >
              2x Sheep
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[1] ||
                inventory.reduce(countOf('cattle'), 0) < 2
              }
              type="button"
              onClick={handleSellAtDestination(1, 'cattle', 'cattle')}
            >
              2x Cattle
            </button>
            or
            <button
              disabled={
                this.props.conversionInputs[1] ||
                inventory.reduce(countOf('horse'), 0) < 2
              }
              type="button"
              onClick={handleSellAtDestination(1, 'horse', 'horse')}
            >
              2x Horse
            </button>
            for 9 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[2] || !hasFabricSet(inventory)
              }
              type="button"
              onClick={handleSellAtDestination(2, 'woolen', 'linen', 'leather')}
            >
              Woolen + Linen + Leather
            </button>
            for 12 food
          </li>

          <li>
            <button
              disabled={
                this.props.conversionInputs[3] || !hasClothesSet(inventory)
              }
              type="button"
              onClick={handleSellAtDestination(
                3,
                'winterWear',
                'summerWear',
                'leatherWear'
              )}
            >
              Winter Wear + Summer Wear + Leather Wear
            </button>
            for 30 food
          </li>

          <li>
            {moors.length !== 0 &&
              moors.map(field => (
                <button
                  disabled={this.props.conversionInputs[4]}
                  type="button"
                  onClick={handleSellAtDestination(4, field)}
                >
                  {field}
                </button>
              ))}
            {moors.length === 0 && (
              <button disabled type="button">
                boardwalk
              </button>
            )}
            for thoughts and prayers
          </li>
        </ul>
      </div>
    )
  }
}

Bremen.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Bremen
