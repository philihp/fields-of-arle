export default ({ G, ctx: { currentPlayer }, args }) => {
  const [selected] = args
  return {
    ...G,
    selected: {
      ...G.selected,
      ...selected,
    },
  }
}
