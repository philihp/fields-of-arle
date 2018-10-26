export const flatten = (accum, row) => [...accum, ...row]

export const afford = (inventory, cost) => {
  let state = {
    i: [...inventory],
    unfound: [],
  }
  // remove all cost from inventory
  state = cost.reduce((s, costItem) => {
    const index = s.i.indexOf(costItem)
    if (index === -1)
      return {
        ...s,
        unfound: [...s.unfound, costItem],
      }
    else
      return {
        ...s,
        i: [...s.i.slice(0, index), ...s.i.slice(index + 1)],
      }
  }, state)

  // not strictly necessary, but normally we dont need to worry about
  // spending advanced inventory goods as basic inventory goods
  if (state.unfound.length === 0) return true

  // translate unfound items from basic to advanced goods
  const unfoundCost = state.unfound.map(unfoundItem => {
    if (unfoundItem === 'clay') return 'brick'
    else if (unfoundItem === 'wood') return 'timber'
    else return unfoundItem
  })

  // remove all cost from inventory again
  state = unfoundCost.reduce(
    (s, costItem) => {
      const index = s.i.indexOf(costItem)
      if (index === -1)
        return {
          ...s,
          unfound: [...s.unfound, costItem],
        }
      else
        return {
          ...s,
          i: [...s.i.slice(0, index), ...s.i.slice(index + 1)],
        }
    },
    { ...state, unfound: [] }
  )

  return state.unfound.length === 0
}

export const distinct = (inventory, kinds) =>
  kinds.reduce((accum, kind) => accum + (inventory.includes(kind) ? 1 : 0), 0)

const removeOne = element => array => {
  const index = array.indexOf(element)
  if (index === -1) return array
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export const remove = (...elements) => array =>
  elements.reduce((a, e) => removeOne(e)(a), array)

export const spendInventory = (inventory, cost) => {
  let state = {
    i: [...inventory],
    unfound: [],
  }
  // remove all cost from inventory
  state = cost.reduce((s, costItem) => {
    const index = s.i.indexOf(costItem)
    if (index === -1)
      return {
        ...s,
        unfound: [...s.unfound, costItem],
      }
    else
      return {
        ...s,
        i: [...s.i.slice(0, index), ...s.i.slice(index + 1)],
      }
  }, state)

  // not strictly necessary, but normally we dont need to worry about
  // spending advanced inventory goods as basic inventory goods
  if (state.unfound.length === 0) return state.i

  // translate unfound items from basic to advanced goods
  const unfoundCost = state.unfound.map(unfoundItem => {
    if (unfoundItem === 'clay') return 'brick'
    else if (unfoundItem === 'wood') return 'timber'
    else return unfoundItem
  })

  // remove all cost from inventory again
  state = unfoundCost.reduce(
    (s, costItem) => {
      const index = s.i.indexOf(costItem)
      if (index === -1)
        return {
          ...s,
          unfound: [...s.unfound, costItem],
        }
      else
        return {
          ...s,
          i: [...s.i.slice(0, index), ...s.i.slice(index + 1)],
        }
    },
    { ...state, unfound: [] }
  )

  return state.i
}

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

export const listToKeyedList = inventory =>
  inventory.reduce(
    (accum, item) => ({
      counters: { ...accum.counters, [item]: accum.counters[item] + 1 },
      list: [...accum.list, { item, key: `${item}-${accum.counters[item]}` }],
    }),
    {
      counters: inventory.reduce((a, k) => ({ ...a, [k]: 0 })),
      list: [],
    }
  ).list

export const identity = i => i
