// export const isSummer = (state) => {
//   state.month <= 3
// }

// export const isWinter = (state) => {
//   state.month >= 4
// }

export const popWorker = (state) => {
  const newPrep = Object.assign({}, state.preparations)
  newPrep[state.month] = newPrep[state.month].slice(1)
  return newPrep
}

export const bumpMonth = (state) => {
  return state.month + (state.preparations[state.month].length === 0 ? 1 : 0)
}
