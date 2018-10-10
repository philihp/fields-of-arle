import React from 'react'
import PropTypes from 'prop-types'
import costs from '../costs/'

const visible = ({ selected }) =>
  selected !== undefined &&
  selected.building !== undefined &&
  selected.col !== undefined &&
  selected.row !== undefined

class Builder extends React.Component {
  bar = () => {}

  render() {
    const BuildingCost = costs[this.props.G.selected.building]
    const {
      G,
      ctx: { currentPlayer },
      moves,
    } = this.props
    const {
      players: {
        [currentPlayer]: { inventory, goods },
      },
    } = G
    return (
      <div>
        {this.props.ctx === undefined}
        <br />
        {this.props.G === undefined}
        <br />
        {this.props.moves === undefined}
        <br />
        <BuildingCost inventory={inventory} goods={goods} moves={moves} />
      </div>
    )
  }
}

Builder.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible,
  component: Builder,
}
