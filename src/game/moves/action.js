import jobs from '../jobs'
import { autoArrange } from './arrange'

export default (G, ctx, job, offSeason) => {
  if (G.workerSpaces[job] == null) {
    const G2 = {
      ...G,
      lighthouse: {
        owner: offSeason ? -(+ctx.currentPlayer - 1) : G.lighthouse.owner,
        used: G.lighthouse.used || offSeason,
      },
      workerSpaces: {
        ...G.workerSpaces,
        [ctx.phase]: G.workerSpaces[ctx.phase].slice(1),
        [job]: G.workerSpaces[ctx.phase][0],
      },
    }
    const G3 = jobs[job](G2, ctx, job, offSeason)
    return autoArrange(G3)
  }
}
