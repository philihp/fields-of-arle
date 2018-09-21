export const flatten = (accum, row) => [...accum, ...row]

export const afford = (inventory, cost) =>
  inventory.reduce((accum, inventoryItem) => {
    const index = accum.indexOf(inventoryItem)
    if (index === -1) return accum
    return [...accum.slice(0, index), ...accum.slice(index + 1)]
  }, cost).length === 0

export const distinct = (inventory, kinds) =>
  kinds.reduce((accum, kind) => accum + (inventory.includes(kind) ? 1 : 0), 0)

export const spendInventory = (inventory, cost) =>
  cost.reduce((accum, costItem) => {
    const index = accum.indexOf(costItem)
    if (index === -1) return accum
    return [...accum.slice(0, index), ...accum.slice(index + 1)]
  }, inventory)

export const spendGoods = (goods, cost) =>
  cost.reduce(
    (accum, costItem) => ({
      ...accum,
      [costItem]: accum[costItem] - 1,
    }),
    goods
  )

export const season = state => (state.month <= 3 ? 'summer' : 'winter')

export const moveWorker = (G, args) => {
  const actions = { ...G.actions }

  return actions
  // preparations[args.phase] = preparations[args.phase].slice(1)
  // return preparations
}

export const bumpMonth = state =>
  state.month + (state.preparations[state.month].length === 0 ? 1 : 0)

export const removeFirstItems = itemName => (accum, item) => {
  if (accum.count === 0 || item !== itemName) {
    return {
      list: [...accum.list, item],
      count: accum.count,
    }
  } else {
    return {
      list: accum.list,
      count: accum.count - 1,
    }
  }
}

export const Animals = ['sheep', 'horse', 'cattle']
