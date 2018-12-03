const upgradedBuilding = {
  forest: 'park',
  stall: 'depot',
  stable: 'doubleStall',
  moorNorth: 'dmoorNorth',
  moorSouth: 'dmoorSouth',
}

export const flipBuilding = building => {
  if (upgradedBuilding[building.type] === undefined) return building

  const upgradedBuildingType = upgradedBuilding[building.type]
  // ignore dmoorSouth here - only 4 peats are placed in total
  const contents =
    upgradedBuildingType === 'dmoorNorth'
      ? ['peat', 'peat', 'peat', 'peat']
      : building.contents

  return {
    ...building,
    type: upgradedBuildingType,
    contents,
  }
}

export default { flipBuilding }
