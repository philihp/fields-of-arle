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
import wainwright from './wainwright'
import farmer from './farmer'
import builder from './builder'
import woodTrader from './woodTrader'
import forester from './forester'
import foresterPlace from './foresterPlace'

import plowMakersWorkshop from './plowMakersWorkshop'
import workshop from './workshop'
import farmersHouse from './farmersHouse'
/*

These should all accept a hash containing { G, ctx, args }, and return G

*/

export default {
  summerGrocer,
  winterGrocer,
  woolWeaver,
  colonist,
  tanner,
  potter,
  buildersMerchant,
  peatCutter,
  cattleTrader,
  baker,
  summerMaster: master,
  winterMaster: master,
  linenWeaver,
  dikeBuilder,
  butcher,
  summerCarpenter: carpenter,
  winterCarpenter: carpenter,
  wainwright,
  farmer,
  builder,
  woodTrader,
  forester,
  foresterPlace,

  plowMakersWorkshop,
  workshop,
  farmersHouse,
}
