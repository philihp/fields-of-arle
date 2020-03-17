import deneg from 'deneg-zero'
import { findUnusedWorkshops } from './building/workshop'

export const inventoryingTurnOrder = {
  first: (G, context) => +context.currentPlayer,
  next: (G, context) =>
    deneg(-(+context.currentPlayer - (context.numPlayers - 1))),
}

export const preparationsTurnOrder = {
  // this feels weird. it feels like it should just be the lighthouse owner...
  // but something is calling next, which flips the turn back.
  first: (G, context) =>
    deneg(-(+G.lighthouse.owner - (context.numPlayers - 1))),
  next: (G, context) =>
    deneg(-(+context.currentPlayer - (context.numPlayers - 1))),
}

export const actionTurnOrder = {
  first: (G, context) => G.workerSpaces[context.phase][0],
  next: (G, context) => G.workerSpaces[context.phase][0],
}

export const workshopTurnOrder = {
  first: (G, context) => {
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
    return +context.currentPlayer
    // maybe...?   return -(+ctx.currentPlayer - 1)
  },
  next: (G, context) => deneg(-(+context.currentPlayer - 1)),
}

export const allPlayersPassed = G => Object.values(G.passed).every(b => b)

export const resetPassed = (G, context) => ({
  ...G,
  passed: { ...new Array(context.numPlayers).fill(false) },
})
