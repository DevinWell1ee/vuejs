import _ from 'lodash'
import Area from './assets/area.json'

var hierarchy1 = _.filter(Area, o => _.keys(o).length === 2)
var hierarchy2 = _.filter(Area, o => _.keys(o).length === 3)
var hierarchy3 = _.filter(Area, o => _.keys(o).length === 4)

var province = _
  .chain(hierarchy1)
  .map(o => {
    return { value: o.province, label: o.province }
  })
  .forEach(o => {
    o.children = []
  })
  .value()

var city = _
  .chain(hierarchy2)
  .map(o => {
    return { value: o.city, label: o.city, parent: o.province }
  })
  .forEach(o => {
    o.children = []
  })
  .value()

var area = _.map(hierarchy3, o => {
  return { value: o.town, label: o.town, parent: o.city }
})

_.forEach(area, o => {
  _.forEach(city, p => {
    if (p.value === o.parent) p.children.push(o)
  })
})

_.forEach(city, o => {
  _.forEach(province, p => {
    if (p.value === o.parent) p.children.push(o)
  })
})


console.log(province)
console.log(city)
console.log(area)

export const formatEUIData = function () {

}
