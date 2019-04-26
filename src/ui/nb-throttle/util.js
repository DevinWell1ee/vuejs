export const throttle = (fn, interval, cxt) => {
  /**
   * last为上一次触发回调的时间
   */
  let last = 0
  /**
   * 将throttle处理结果当作函数返回
   */
  return function (...args) {
    /**
     * 记录本次触发回调的时间
     */
    let now = +new Date()

    /**
     *  判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
     * */
    if (now - last >= interval) {
    /**
     * 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
     */
      last = now
      fn.apply(cxt, args)
    }
  }
}
