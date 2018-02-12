export const season = state => (state.month <= 3 ? 'summer' : 'winter')

export const moveWorker = (G, args) => {
  const actions = { ...G.actions }

  return actions
  // preparations[args.phase] = preparations[args.phase].slice(1)
  // return preparations
}

export const bumpMonth = state => {
  return state.month + (state.preparations[state.month].length === 0 ? 1 : 0)
}
