export default (G, ctx) => {
  const monthSpace = G.workerSpaces[ctx.phase]
  if (monthSpace === undefined || monthSpace[0] !== +ctx.currentPlayer) {
    return {
      ...G,
      action: null,
      workshopsUsed: [],
      workshop: null,
      passed: {
        ...G.passed,
        [ctx.currentPlayer]: true,
      },
    }
  }
}
