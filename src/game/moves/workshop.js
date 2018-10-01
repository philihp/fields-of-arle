export default (G, ctx, workshop) => {
  const previousWorkshop = G.workshopsUsed || []
  if (previousWorkshop.includes(workshop)) return G
  return {
    ...G,
    workshop: workshop,
    workshopsUsed: [workshop, ...previousWorkshop],
  }
}
