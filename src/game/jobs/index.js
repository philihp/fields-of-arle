import fisherman from './fisherman'
import summerGrocer from './summerGrocer'
import winterGrocer from './winterGrocer'
import generic from './generic'
import colonist from './colonist'
import buildersMerchant from './buildersMerchant'
import clayWorker from './clayWorker'
import woodcutter from './woodcutter'
import cattleTrader from './cattleTrader'
import peatBoatman from './peatBoatman'
import woodTrader from './woodTrader'
import forester from './forester'

export default {
  fisherman,
  summerGrocer,
  winterGrocer,
  woolWeaver: generic,
  colonist,
  peatCutter: generic,
  dikeBuilder: generic,
  clayWorker,
  farmer: generic,
  forester,
  woodcutter,
  summerMaster: generic,
  winterMaster: generic,
  summerCarpenter: generic,
  winterCarpenter: generic,
  builder: generic,
  warden: generic, // TODO
  summerLaborer: generic, // TODO
  winterLaborer: generic, // TODO
  peatBoatman,
  tanner: generic,
  linenWeaver: generic,
  butcher: generic,
  cattleTrader,
  buildersMerchant,
  potter: generic,
  baker: generic,
  woodTrader,
  dikeWarden: generic, // TODO
  wainwright: generic,
}
