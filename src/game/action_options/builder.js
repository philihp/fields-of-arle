export default ({ G, ctx: { currentPlayer }, args }) => {
  const [options] = args

  const selected = {
    ...G.selected,
    ...options,
  }
  console.log(selected)

  if (
    selected.hasOwnProperty('building') &&
    selected.hasOwnProperty('col') &&
    selected.hasOwnProperty('row') &&
    selected.hasOwnProperty('cost')
  ) {
    return {
      ...G,
      // TODO: place the building
      action: null,
      selected: undefined,
    }
  } else {
    return {
      ...G,
      selected,
    }
  }
}
