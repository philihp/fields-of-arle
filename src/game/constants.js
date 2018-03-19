export const ToolIncrements = {
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

export const ToolPoints = {
  fishTraps: [0, 0, 0, 0, 3],
  fleshingBeams: [0, 1, 3],
  weavingLooms: [0, 1, 3, 4],
  slaughteringTables: [0, 1, 2],
  spades: [0, 0, 2],
  shovels: [0, 0, 0, 0],
  shovelPairs: [0, 0, 0, 0],
  potteryWheels: [0, 0, 2],
  ovens: [0, 1, 5, 7],
  axes: [0, 0, 0, 0],
  workbenches: [0, 1, 4],
}

export const ToolUpgradeCosts = {
  fishTraps: ['wood'],
  fleshingBeams: ['wood'],
  weavingLooms: ['wood', 'wood'],
  slaughteringTables: ['clay'],
  spades: ['wood'],
  shovels: ['wood'],
  potteryWheels: ['clay'],
  ovens: ['brick'],
  axes: ['wood'],
  workbenches: ['clay', 'clay'],
}

export const toolValue = (name, index) => ToolIncrements[name][index]

export const possiblePeatLocations = [[4, 1], [5, 0], [5, 1], [5, 2]]
