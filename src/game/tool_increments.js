const ToolIncrements = {
  fishTraps: [2, 3, 4, 5, 6],
  fleshingBeams: [3, 5, 6],
  weavingLooms: [2, 3, 4, 5],
  slaughteringTables: [2, 3, 4],
  spades: [3, 5, 7],
  shovels: [3, 4, 5, 6],
  shovelPairs: [1, 2, 2, 3],
  potteryWheels: [2, 3, 4],
  ovens: [1, 2, 3, 4],
  axes: [3, 4, 5, 6],
  workbenches: [2, 3, 4],
}

export const toolValue = (name, index) => ToolIncrements[name][index]

export default ToolIncrements
