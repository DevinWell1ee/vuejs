import Vue from 'vue'
import AlertComponent from './alert.vue'
import {mergeVdata} from '../util.js'
//合并对象函数，这个方法是会改变，第一个参数的值的

let instance
//extend 是构造一个组件的语法器.传入参数，返回一个组件
let AlertConstructor = Vue.extend(AlertComponent)

let initInstance = ()=>{
    //实例化ConfirmConstructor组件
    if (!instance) {
        // 单例
        instance = new AlertConstructor({
            el: document.createElement('div')
        })
        //添加到boby
        document.body.appendChild(instance.$el)
    }
}

let Alert = (options={}) => {
    //初始化
    initInstance()
    // 将单个 confirm instance 的配置合并到默认值（instance.$data，就是main.vue里面的data）中
    mergeVdata(instance.$data, options)
    //返回Promise
    return new Promise((resolve, reject)=>{
        instance.show = true
        let success = instance.success
        let cancel = instance.cancel
        instance.success = () => {
            //先执行instance.success（main.vue里面的success函数）
            success()
            //再执行自定义函数
            resolve('ok')
        }
        instance.cancel = () => {
          //先执行instance.success（main.vue里面的success函数）
          cancel()
          //再执行自定义函数
          resolve('cancel')
        }
    });

}

export default Alert