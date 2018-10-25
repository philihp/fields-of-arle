import { inventoryAddToPlayer } from '../player'
import { initialState } from '../../index'

describe('player', () => {
  let player
  beforeEach(() => {
    player = initialState.players[0]
  })

  describe('inventoryAddToPlayer', () => {
    const addCake = inventoryAddToPlayer('cake')
    it('returns a new player', () => {
      expect(addCake(player)).not.toBe(player)
    })
    it('adds cake to inventory', () => {
      expect(addCake(player).inventory).toEqual([...player.inventory, 'cake'])
    })
    it('other fields are unchanged', () => {
      const newPlayer = addCake(player)
      Object.keys(player)
        .filter(attr => attr !== 'inventory')
        .forEach(key => {
          expect(newPlayer[key]).toBe(player[key])
        })
    })
  })
})
