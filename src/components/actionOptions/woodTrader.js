import React from 'react'
import PropTypes from 'prop-types'

class WoodTrader extends React.Component {
  handleFourWood = () => {
    this.props.moves.option('wood')
  }

  handleBuilding = () => {
    this.props.moves.option('building')
  }

  render() {
    return (
      <div>
        <input type="submit" value="Take 4 wood" />
        <br />
        or
        <br />
        <input type="submit" value="Build 1 building" />
      </div>
    )
  }
}

WoodTrader.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: WoodTrader,
}
