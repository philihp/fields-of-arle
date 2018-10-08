import React from 'react'
import PropTypes from 'prop-types'
import TableauFarm from './tableauFarm'
import TableauBarn from './tableauBarn'
import TableauDestinations from './tableauDestinations'
import TableauInventory from './tableauInventory'
import './tableau.css'

const Tableau = ({
  G,
  ctx,
  player,
  moves,
  shouldShowLoadTile,
  shouldShowLoadBarnSpace,
  shouldShowPlace,
}) => {
  const handlePlaceBuilding = (row, col) => () => {
    moves.option({ col, row })
  }
  const handleLoadDestination = destination => () => {
    moves.load({ destination })
  }
  const handleLoadBarnSpace = barnSpace => () => {
    moves.load({ barnSpace })
  }
  const handleLoadInventory = inventory => () => {
    moves.load({ inventory })
  }
  return (
    <div className="Tableau">
      <TableauFarm
        G={G}
        ctx={ctx}
        moves={moves}
        land={player.land}
        dikes={player.dikes}
        handlePlaceBuilding={shouldShowPlace ? handlePlaceBuilding : null}
      />
      <TableauDestinations
        destinations={player.destinations}
        handleLoad={shouldShowLoadTile ? handleLoadDestination : null}
      />
      <div className="goods">{JSON.stringify(player.goods)}</div>
      <div className="inventory">
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {player.tokens.join(', ')}
        </span>
      </div>
      <TableauInventory
        inventory={player.inventory}
        handleLoad={shouldShowLoadTile ? handleLoadInventory : null}
      />
      <TableauBarn
        barn={player.barn}
        handleLoad={shouldShowLoadBarnSpace ? handleLoadBarnSpace : null}
      />
    </div>
  )
}

Tableau.propTypes = {
  player: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  shouldShowLoadTile: PropTypes.bool.isRequired,
  shouldShowLoadBarnSpace: PropTypes.bool.isRequired,
  shouldShowPlace: PropTypes.bool.isRequired,
}

export default Tableau
