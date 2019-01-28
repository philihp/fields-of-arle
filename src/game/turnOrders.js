import deneg from 'deneg-zero'

export const inventoryingTurnOrder = {
  first: (G, ctx) => +ctx.currentPlayer,
  next: (G, ctx) => deneg(-(+ctx.currentPlayer - (ctx.numPlayers - 1))),
}

export const preparationsTurnOrder = {
  // this feels weird. it feels like it should just be the lighthouse owner...
  // but something is calling next, which flips the turn back.
  first: (G, ctx) => deneg(-(+G.lighthouse.owner - (ctx.numPlayers - 1))),
  next: (G, ctx) => deneg(-(+ctx.currentPlayer - (ctx.numPlayers - 1))),
}

export const actionTurnOrder = {
  first: (G, ctx) => G.workerSpaces[ctx.phase][0],
  next: (G, ctx) => G.workerSpaces[ctx.phase][0],
}

export const workshopTurnOrder = {
  first: (G, ctx) => {
    const unusedWorkshops = findUnusedWorkshops(G)
    // This is hella unelegant
    if (G.players.length > 1) {
      if (
        unusedWorkshops['0'].length === 0 &&
        unusedWorkshops['1'].length !== 0
      )
        return 0 // gonna immediately call next and this will be 1's turn
      if (
        unusedWorkshops['0'].length !== 0 &&
        unusedWorkshops['1'].length === 0
      )
        return 1 // gonna immediately call next and this will be 0's turn
    }
    return +ctx.currentPlayer
    // maybe...?   return -(+ctx.currentPlayer - 1)
  },
  next: (G, ctx) => deneg(-(+ctx.currentPlayer - 1)),
}

export const allPlayersPassed = G => Object.values(G.passed).every(b => b)

export const resetPassed = (G, ctx) => ({
  ...G,
  passed: { ...new Array(ctx.numPlayers).fill(false) },
})
