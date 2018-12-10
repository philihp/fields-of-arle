import {
  inventoryAddToPlayer,
  inventorySpendFromPlayer,
  payForVehicle,
} from '../player'
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
    it('adds multiple items to inventory', () => {
      const addEggs = inventoryAddToPlayer('egg', 'egg')
      expect(addEggs(player).inventory).toEqual([
        ...player.inventory,
        'egg',
        'egg',
      ])
    })
  })

  describe('inventorySpendFromPlayer', () => {
    beforeEach(() => {
      player = {
        ...player,
        inventory: ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'ddd', 'aaa', 'ccc'],
      }
    })
    it('only spends one', () => {
      player = inventorySpendFromPlayer('aaa')(player)
      const expected = ['bbb', 'ccc', 'aaa', 'bbb', 'ddd', 'aaa', 'ccc']
      expect(player.inventory).toEqual(expected)
    })
    it('can spend multiple', () => {
      player = inventorySpendFromPlayer('aaa', 'ccc', 'ddd')(player)
      const expected = ['bbb', 'aaa', 'bbb', 'aaa', 'ccc']
      expect(player.inventory).toEqual(expected)
    })
  })

  describe('payForVehicle', () => {
    const ctx = { currentPlayer: '0' }
    const G = {
      players: {
        0: {
          // hypothetical 1x1 farm
          land: [[{ type: 'empty', contents: ['horse'] }]],
          dikes: [[{ type: 'dike', contents: ['cattle'] }]],
          inventory: ['wood', 'clay', 'clay'],
          goods: {},
        },
      },
    }
    const result = payForVehicle({ G, ctx }, 'plow', 'cattle')
    it('uses the animal expected', () => {
      expect(
        result.G.players[ctx.currentPlayer].dikes[0][0].contents
      ).toHaveLength(0)
    })
    it('consumes the inventory resources', () => {
      expect(result.G.players[ctx.currentPlayer].inventory).not.toContain(
        'wood'
      )
    })
  })
})
