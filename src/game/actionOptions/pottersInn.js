import { compose } from 'redux'
import { addToken } from '../common/player'

const addAnimal = animalType => ({ G, ctx }) => addToken({ G, ctx }, animalType)

const clearAction = ({ G, ctx, ...args }) => ({
  G: { ...G, action: null },
  ctx,
  ...args,
})

const addChosenAnimals = ({ args }) => ({ G, ctx }) =>
  compose(
    addAnimal('sheep'),
    addAnimal('horse'),
    addAnimal('cow')
  )({ G, ctx })

export default ({ G, ctx, ...args }) =>
  compose(
    addChosenAnimals(args),
    clearAction
  )({ G, ctx, ...args }).G
