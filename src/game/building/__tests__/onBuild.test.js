import onBuild from '../onBuild'
import { identity } from '../../common/index'

describe('onBuild', () => {
  it('gives back identity for unknown buildings', () => {
    expect(onBuild('fhwdgads')).toBe(identity)
  })

  it('has a mill reducer', () => {
    expect(onBuild('mill')).not.toBe(identity)
  })
  it('has a mill', () => {
    expect(onBuild('mill')).not.toBe(identity)
  })
  it('has a weavingMill', () => {
    expect(onBuild('weavingMill')).not.toBe(identity)
  })
  it('has a textileHouse', () => {
    expect(onBuild('textileHouse')).not.toBe(identity)
  })
  it('has a gulfHouseInn', () => {
    expect(onBuild('gulfHouseInn')).not.toBe(identity)
  })
  it('has a cooperage', () => {
    expect(onBuild('cooperage')).not.toBe(identity)
  })
  it('has a waterfrontHouse', () => {
    expect(onBuild('waterfrontHouse')).not.toBe(identity)
  })
  it('has a villageChurch', () => {
    expect(onBuild('villageChurch')).not.toBe(identity)
  })
  it('has a sluiceYardInn', () => {
    expect(onBuild('sluiceYardInn')).not.toBe(identity)
  })
  it('has a saddlery', () => {
    expect(onBuild('saddlery')).not.toBe(identity)
  })
  it('has a turnery', () => {
    expect(onBuild('turnery')).not.toBe(identity)
  })
  it('has a milkHouseInn', () => {
    expect(onBuild('milkHouseInn')).not.toBe(identity)
  })
  it('has a smokehouse', () => {
    expect(onBuild('smokehouse')).not.toBe(identity)
  })
  it('has a berumCastle', () => {
    expect(onBuild('berumCastle')).not.toBe(identity)
  })
  it('has a bakehouse', () => {
    expect(onBuild('bakehouse')).not.toBe(identity)
  })
  it('has a smithy', () => {
    expect(onBuild('smithy')).not.toBe(identity)
  })
})
