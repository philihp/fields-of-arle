const cellNotEmpty = cell => cell.type !== 'empty'
const rowNotEmpty = row => row.every(cellNotEmpty)
export const dikeLevel = dikes => dikes.findIndex(rowNotEmpty)
