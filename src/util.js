import _ from 'lodash'
import Area from './assets/area.json'


export function mergeVdata (target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {}
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop]
                if (!_.isUndefined(value)) target[prop] = value
            }
        }
    }
    return target
}

var hierarchy1 = _.filter(Area, o => _.keys(o).length === 2)
var hierarchy2 = _.filter(Area, o => _.keys(o).length === 3)
var hierarchy3 = _.filter(Area, o => _.keys(o).length === 4)

var province = _.map(hierarchy1, o => {
    return { value: o.code, text: o.province, parentId: 0 }
})


var city = _.map(hierarchy2, o => {
    var parentId = _
        .chain(hierarchy1)
        .filter(p => p.province === o.province)
        .head()
        .pick('code')
        .get('code')
        .value()

    return { value: o.code, text: o.city, parentId}
})

var area = _.map(hierarchy3, o => {
    var parentId = _
        .chain(hierarchy2)
        .filter(p => p.city === o.city)
        .head()
        .pick('code')
        .get('code')
        .value()

    return { value: o.code, text: o.town, parentId}
})

const data = [province, city, area]

console.log([...data])

export function formatArea () {
    return [...data]
}