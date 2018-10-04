import { compose } from 'redux'
import { remove } from '../common'
import { addInventory, addGoods } from '../common/player'
import { buildDikes } from '../common/land'
import { passIfNoOtherWorkshops } from '../actionOptions/workshop'

const setAction = ({ G, ctx, workshop }) => ({
  G: {
    ...G,
    action: workshop,
  },
  ctx,
  workshop,
})

const removeUnusedWorkshop = ({ G, ctx, workshop }) => {
  console.log('removing...', G.unusedWorkshops[ctx.currentPlayer])
  return {
    G: {
      ...G,
      unusedWorkshops: {
        ...G.unusedWorkshops,
        [ctx.currentPlayer]: remove(
          G.unusedWorkshops[ctx.currentPlayer],
          workshop
        ),
      },
    },
    ctx,
    workshop,
  }
}

const addInventoryFromWorkshop = item => ({ G, ctx, workshop }) => ({
  ...addInventory({ G, ctx }, [item]),
  workshop,
})

const addGoodFromWorkshop = good => ({ G, ctx, workshop }) => ({
  ...addGoods({ G, ctx }, good, 1),
  workshop,
})

const actionsForWorkshop = workshop => {
  switch (workshop) {
    case 'workshop':
      return [addInventoryFromWorkshop('wood'), setAction]
    case 'novicesHut':
      return [
        addGoodFromWorkshop('grain'),
        buildDikes(1),
        passIfNoOtherWorkshops,
      ]
    case 'farmersHouse':
      return [addInventoryFromWorkshop('clay'), setAction]
    case 'plowMakersWorkshop':
      return [addInventoryFromWorkshop('wood'), setAction]
    default:
      return []
  }
}

export default (G, ctx, workshop) =>
  compose(
    ...actionsForWorkshop(workshop),
    removeUnusedWorkshop
  )({ G, ctx, workshop }).G
