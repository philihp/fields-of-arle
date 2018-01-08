export const season = (state) =>
  (state.month <= 3) ? 'summer' : 'winter'

export const pickWorker = (state) => {
  const newPrep = Object.assign({}, state.preparations)
  newPrep[state.month] = newPrep[state.month].slice(1)
  return newPrep
}

export const plopWorker = (state, job) => {
  const worker = state.preparations[state.month][0]
  const actions = JSON.parse(JSON.stringify(state.actions))
  actions[season(state)][job] = worker
  return actions
}

export const bumpMonth = (state) => {
  return state.month + (state.preparations[state.month].length === 0 ? 1 : 0)
}
