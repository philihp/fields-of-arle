import fisherman from './fisherman'
import grocer from './grocer'
import generic from './generic'
import colonist from './colonist'
import buildersMerchant from './buildersMerchant'
import clayWorker from './clayWorker'
import woodcutter from './woodcutter'

export default {
  fisherman,
  summerGrocer: grocer,
  winterGrocer: grocer,
  woolWeaver: generic,
  colonist,
  peatCutter: generic,
  dikeBuilder: generic, // TODO
  clayWorker,
  farmer: generic, // TODO
  forester: generic, // TODO
  woodcutter,
  summerMaster: generic, // TODO
  winterMaster: generic, // TODO
  summerCarpenter: generic, // TODO
  winterCarpenter: generic, // TODO
  builder: generic, // TODO
  warden: generic, // TODO
  summerLaborer: generic, // TODO
  winterLaborer: generic, // TODO
  peatBoatman: generic, // TODO
  tanner: generic,
  linenWeaver: generic, // TODO
  butcher: generic, // TODO
  cattleTrader: generic, // TODO
  buildersMerchant,
  potter: generic,
  baker: generic, // TODO
  woodTrader: generic, // TODO
  dikeWarden: generic, // TODO
}
