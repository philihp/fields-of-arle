import React from 'react'
import PropTypes from 'prop-types'
import { toolValue } from '../../game/constants'

class Tanner extends React.Component {
  constructor(props) {
    super(props)
    const {
      G,
      ctx: { currentPlayer },
    } = props
    const fleshingBeams = 'fleshingBeams'
    const wool = G.players[currentPlayer].goods.wool
    const fleshBeams = toolValue(
      fleshingBeams,
      G.toolSpaces[fleshingBeams][currentPlayer]
    )
    const maxTimes = Math.min(wool, fleshBeams)
    this.state = {
      maxTimes,
      checked: maxTimes,
    }
  }

  render() {
    const handleClick = e => {
      this.setState({ checked: parseInt(e.target.value, 10) })
    }

    const handleSubmit = e => {
      e.preventDefault()
      this.props.moves.option(this.state.checked)
    }

    return (
      <form onSubmit={handleSubmit}>
        Convert hide to leather, per fleshing beam
        <br />
        <br />
        {[...Array(this.state.maxTimes + 1)].map((_, i) => i).map(i => (
          <div key={i}>
            <input
              type="radio"
              name="tannerConvert"
              id={i}
              value={i}
              onClick={handleClick}
              defaultChecked={this.state.checked}
            />
            <label htmlFor={i}>Convert {i} hide</label>
          </div>
        ))}
        <input type="submit" value="Convert" />
      </form>
    )
  }
}

Tanner.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
}

export default {
  visible: () => true,
  component: Tanner,
}
