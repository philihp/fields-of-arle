const imitatedAction = ({ G, ctx, ...args }) => ({
  G: { ...G, action: args.args[0] },
  ctx,
  ...args,
})

export default ({ G, ctx, ...args }) => imitatedAction({ G, ctx, ...args }).G
