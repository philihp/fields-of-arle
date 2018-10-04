import summerGrocer from './summerGrocer'
import winterGrocer from './winterGrocer'
import woolWeaver from './woolWeaver'
import colonist from './colonist'
import tanner from './tanner'
import potter from './potter'
import buildersMerchant from './buildersMerchant'
import peatCutter from './peatCutter'
import cattleTrader from './cattleTrader'
import baker from './baker'
import master from './master'
import linenWeaver from './linenWeaver'
import dikeBuilder from './dikeBuilder'
import butcher from './butcher'
import carpenter from './carpenter'
import arrange from './arrange'
import wainwright from './wainwright'
import farmer from './farmer'
import builder from './builder'

import plowMakersWorkshop from './plowMakersWorkshop'
import workshop from './workshop'
import farmersHouse from './farmersHouse'

// Exhaustive list of all of the actions with options to prompt after selected

// Each of these should be an object in the form
// {
//   visible: (G) => boolean
//   component: ReactComponent
// }

export default {
  summerGrocer,
  winterGrocer,
  woolWeaver,
  colonist,
  tanner,
  potter,
  builder,
  buildersMerchant,
  peatCutter,
  cattleTrader,
  baker,
  winterMaster: master,
  summerMaster: master,
  linenWeaver,
  dikeBuilder,
  butcher,
  winterCarpenter: carpenter,
  summerCarpenter: carpenter,
  wainwright,
  farmer,
  arrange,

  plowMakersWorkshop,
  workshop,
  farmersHouse,
}
