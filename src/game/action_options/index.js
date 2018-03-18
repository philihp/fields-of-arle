import grocer from './grocer'
import woolWeaver from './woolWeaver'
import colonist from './colonist'
import tanner from './tanner'
import potter from './potter'
import buildersMerchant from './buildersMerchant'
import peatCutter from './peatCutter'
import cattleTrader from './cattleTrader'
/*

These should all accept a hash containing { G, ctx, args }, and return G

*/

export default {
  summerGrocer: grocer,
  winterGrocer: grocer,
  woolWeaver,
  colonist,
  tanner,
  potter,
  buildersMerchant,
  peatCutter,
  cattleTrader,
}
