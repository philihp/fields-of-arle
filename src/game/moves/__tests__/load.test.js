import load, { tokenSizes, destinationInputs } from '../load'

describe('load', () => {
  it('defines tokenSizes array', () => {
    expect(tokenSizes).toBeInstanceOf(Object)
  })
  it('defines destinationInputs array', () => {
    expect(destinationInputs).toBeInstanceOf(Object)
  })
  describe('loading', () => {
    const G = action => ({
      action,
      players: {
        0: {
          inventory: ['peat', 'peat', 'clay', 'wood'],
          barn: {
            large1: {
              type: 'carriage',
              contents: [null, null, null, null],
            },
          },
        },
      },
    })
    const ctx = { currentPlayer: '0' }
    const args = []
    it('sets action to load when no action', () => {
      const output = load(G(null), ctx, undefined)
      expect(output.action).toEqual('load')
    })
    it('sets action from load to null when cancelling', () => {
      const output = load(G('load'), ctx, 'cancel')
      expect(output.action).toEqual(null)
    })
    it('sets action to load when no action', () => {
      const output = load(G('load'), ctx, {
        token: 'clay',
        barnSpace: 'large1',
        vehicleOffset: 2,
      })
      expect(output.players['0'].barn.large1.contents).toEqual([
        null,
        null,
        'clay',
        null,
      ])
    })
    it('consumes the item, and a peat if its clay', () => {
      const output = load(G('load'), ctx, {
        token: 'clay',
        barnSpace: 'large1',
        vehicleOffset: 2,
      })
      expect(output.players['0'].inventory).toContain('peat', 'wood')
    })
  })
})
