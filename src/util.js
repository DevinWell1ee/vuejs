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