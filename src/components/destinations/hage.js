import React from 'react'
import PropTypes from 'prop-types'

const isField = s => s.match(/^(flax-|grain-)/)

class Hage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { inventory, handleSellAtDestination } = this.props
    const fields = inventory.filter(isField)
    return (
      <div>
        <b>Sellers at Hage will buy:</b>
        <ul>
          <li>
            {fields.length !== 0 &&
              fields.map(field => (
                <button
                  key={field}
                  disabled={this.props.conversionInputs[0]}
                  type="button"
                  onClick={handleSellAtDestination(0, field)}
                >
                  {field}
                </button>
              ))}
            {fields.length === 0 && (
              <button disabled type="button">
                Field
              </button>
            )}
            for 2 food
          </li>
        </ul>
      </div>
    )
  }
}

Hage.propTypes = {
  conversionInputs: PropTypes.array.isRequired,
  inventory: PropTypes.array.isRequired,
  handleSellAtDestination: PropTypes.func.isRequired,
}

export default Hage
