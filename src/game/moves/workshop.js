import { remove } from '../common'
import { addInventory } from '../common/player'

export default (G, ctx, workshop) => {
  const unusedWorkshops = G.unusedWorkshops[ctx.currentPlayer]
  if (!unusedWorkshops.includes(workshop)) return G

  return {
    ...(workshop !== 'workshop' ? G : addInventory({ G, ctx }, ['wood']).G),
    action: workshop,
    unusedWorkshops: {
      ...G.unusedWorkshops,
      [ctx.currentPlayer]: remove(unusedWorkshops, workshop),
    },
  }
}
