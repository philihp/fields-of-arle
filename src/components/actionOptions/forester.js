import React from 'react'
import PropTypes from 'prop-types'

class Forester extends React.Component {
  handleForest = () => {
    this.props.moves.option('forest')
  }

  handleBuilding = () => {
    this.props.moves.option('building')
  }

  nowhereToBuild = () => false

  render() {
    return (
      <div>
        <input
          disabled={this.nowhereToBuild()}
          type="submit"
          value="Place 1 Forest"
          onClick={this.handleForest}
        />
        <br />
        or
        <br />
        <input
          type="submit"
          value="Build 1 building"
          onClick={this.handleBuilding}
        />
      </div>
    )
  }
}

Forester.propTypes = {
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Forester,
}
