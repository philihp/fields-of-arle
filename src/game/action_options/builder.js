export default ({ G, ctx: { currentPlayer }, args }) => {
  console.log(args)
  const [selected] = args
  return {
    ...G,
    selected: {
      ...G.selected,
      ...selected,
    },
  }
}
