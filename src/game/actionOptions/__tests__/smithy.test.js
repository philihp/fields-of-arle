import smithy from '../smithy'

const state = () => ({
  G: {
    action: 'smithy',
    players: {
      0: {
        barn: {
          small1: { type: 'peatBoat', contents: [] },
          small2: { type: 'wagon', contents: [] },
        },
      },
    },
    supplies: {
      handcartWagon: 3,
      peatBoatPlow: 2,
    },
  },
  ctx: {
    currentPlayer: '0',
  },
  args: [['small1', 'small2']],
})

describe('smithy', () => {
  xit('clears the action', () => {
    const src = state()
    const dst = smithy(src)
    expect(dst.action).toBeNull()
  })

  xit('converts peatBoat to plow', () => {
    const src = state()
    const dst = smithy(src)
    expect(dst.players['0'].barn.small1).toEqual({ type: 'plow', contents: [] })
  })

  xit('converts wagon to plow', () => {
    const src = state()
    const dst = smithy(src)
    expect(dst.players['0'].barn.small2).toEqual({ type: 'plow', contents: [] })
  })

  it('returns supplies', () => {
    const src = state()
    const dst = smithy(src)
    expect(dst.supplies.handcartWagon).toBe(4)
    expect(dst.supplies.peatBoatPlow).toBe(1)
  })
})
