export default (G, ctx, workshop) => {
  if (G.workshopsUsed.includes(workshop)) return G
  return {
    ...G,
    workshop: workshop,
    workshopsUsed: [workshop, ...G.workshopsUsed],
  }
}
