import fisherman from './fisherman'
import summerGrocer from './summerGrocer'
import winterGrocer from './winterGrocer'
import generic from './generic'
import colonist from './colonist'
import buildersMerchant from './buildersMerchant'
import clayWorker from './clayWorker'
import woodcutter from './woodcutter'
import cattleTrader from './cattleTrader'

export default {
  fisherman,
  summerGrocer,
  winterGrocer,
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
  cattleTrader,
  buildersMerchant,
  potter: generic,
  baker: generic,
  woodTrader: generic, // TODO
  dikeWarden: generic, // TODO
}
