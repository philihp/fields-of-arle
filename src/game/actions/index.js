export const woodcutter = () => ({
  type: 'woodcutter'
})

export const workshop = () => ({
  type: 'workshop'
})

export const master = (tools) => ({
  type: 'master',
  tools
})

export default (move) => {
  switch(move) {
    case 'woodcutter':
      return woodcutter;
    case 'workshop':
      return workshop;
    case 'master':
      return master;
    default:
      return null;
  }
}
