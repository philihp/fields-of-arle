import { findFirstAnimal } from '../common/animals'

const animalFoodValue = animal => (animal === 'cattle' ? 4 : 3)

export const slaughterAnimal = (player, animal) => {
  const address = findFirstAnimal(player, animal)
  if (address === null) return player
  const [grid, row, col, i] = address
  // TODO use removeFirstAnimal instead
  return {
    ...player,
    goods: {
      ...player.goods,
      hides: Math.min(player.goods.hides + 2, 15),
      food: Math.min(player.goods.food + animalFoodValue(animal), 30),
    },
    [grid]: [
      ...player[grid].slice(0, row),
      [
        ...player[grid][row].slice(0, col),
        {
          ...player[grid][row][col],
          contents: [
            ...player[grid][row][col].contents.slice(0, i),
            ...player[grid][row][col].contents.slice(i + 1),
          ],
        },
        ...player[grid][row].slice(col + 1),
      ],
      ...player[grid].slice(row + 1),
    ],
  }
}

export default ({ G, ctx: { currentPlayer }, args }) => ({
  ...G,
  players: {
    ...G.players,
    [currentPlayer]: [
      ...Array(args[0].sheep).fill('sheep'),
      ...Array(args[0].horses).fill('horse'),
      ...Array(args[0].cattle).fill('cattle'),
    ].reduce(slaughterAnimal, G.players[currentPlayer]),
  },
  action: null,
})
