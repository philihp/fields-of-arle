import summerGrocer from '../summerGrocer'

const state = item => ({
  G: {
    action: 'summerGrocer',
    players: {
      0: {
        inventory: [],
        tokens: [],
      },
    },
  },
  ctx: {
    currentPlayer: '0',
  },
  args: [item],
})

describe('summerGrocer', () => {
  it('clears the action', () => {
    const src = state('timber')
    const dst = summerGrocer(src)
    expect(dst.action).toBeNull()
  })
  it('gives a timber', () => {
    const src = state('timber')
    const dst = summerGrocer(src)
    expect(dst.players[0].inventory).toContain('timber')
  })
  it('gives a brick', () => {
    const src = state('brick')
    const dst = summerGrocer(src)
    expect(dst.players[0].inventory).toContain('brick')
  })
  it('gives a cattle', () => {
    const src = state('cattle')
    const dst = summerGrocer(src)
    expect(dst.players[0].tokens).toContain('cattle')
  })
  it('gives a horse', () => {
    const src = state('horse')
    const dst = summerGrocer(src)
    expect(dst.players[0].tokens).toContain('horse')
  })
})
