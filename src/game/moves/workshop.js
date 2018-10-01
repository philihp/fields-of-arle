import { remove } from '../common'

export default (G, ctx, workshop) => {
  const unusedWorkshops = G.unusedWorkshops[ctx.currentPlayer]
  if (!unusedWorkshops.includes(workshop)) return G

  return {
    ...G,
    workshop: workshop,
    unusedWorkshops: {
      ...G.unusedWorkshops,
      [ctx.currentPlayer]: remove(unusedWorkshops, workshop),
    },
  }
}
