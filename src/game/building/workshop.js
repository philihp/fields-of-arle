import deneg from 'deneg-zero'
import { workshops } from './type'

export const playersWorkshops = player =>
  player.land
    .flatMap(row => row.flatMap(cell => cell.type))
    .reduce(
      (accum, type) => (workshops.includes(type) ? [...accum, type] : accum),
      []
    )

const findUnusedWorkshops = G => {
  if (G.players['1'] === undefined) {
    return {
      0: playersWorkshops(G.players['0']),
    }
  }
  return {
    0: playersWorkshops(G.players['0']),
    1: playersWorkshops(G.players['1']),
  }
}

export const resetPassedIfWorkshops = (G, ctx) => {
  const unusedWorkshops = findUnusedWorkshops(G)
  let passed
  if (G.players['1'] === undefined)
    passed = {
      0: unusedWorkshops['0'].length === 0,
    }
  else {
    passed = {
      0: unusedWorkshops['0'].length === 0,
      1: unusedWorkshops['1'].length === 0,
    }
  }
  return { ...G, passed, usedWorkshops: [] }
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
