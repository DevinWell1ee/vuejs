import Vue from 'vue'
import _ from 'lodash'

function capitalizeFirstLetter(string) {
  return _.chain(string)
    .split('-')
    .map( o => o.charAt(0).toUpperCase() + o.slice(1))
    .join('')
    .value()
}

// webpack require.context(文件夹目录，是否搜索子目录，匹配文件正则表达)
const requireComponent = require.context(
  './ui/', false, /\.vue$/
   //找到components文件夹下以.vue命名的文件
)

requireComponent.keys().forEach(fileName => {
  console.log(fileName)
  const componentConfig = requireComponent(fileName)

  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  )

  console.log(componentName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})