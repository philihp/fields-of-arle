export default ({ G, ctx: { currentPlayer }, args }) => {
  const [building] = args
  return {
    ...G,
    action: null,
  }
}
