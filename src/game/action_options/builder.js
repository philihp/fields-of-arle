export default ({ G, ctx: { currentPlayer }, args }) => {
  const [selected] = args
  console.log(args)
  return {
    ...G,
    selected: {
      ...G.selected,
      ...selected,
    },
  }
}
