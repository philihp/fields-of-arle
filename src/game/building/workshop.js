import { workshops } from './type'

export const playersWorkshops = player =>
  player.land
    .flatMap(row => row.flatMap(cell => cell.type))
    .reduce(
      (accum, type) => (workshops.includes(type) ? [...accum, type] : accum),
      []
    )

export const resetPassedIfWorkshops = (G, ctx) => {
  const unusedWorkshops = {
    0: playersWorkshops(G.players['0']),
    1: playersWorkshops(G.players['1']),
  }
  const passed = {
    0: unusedWorkshops['0'].length === 0,
    1: unusedWorkshops['1'].length === 0,
  }
  return { ...G, passed, unusedWorkshops }
}
