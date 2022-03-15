const isString = obj => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

const isArray = obj => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const isNumber = obj => {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

const isType = type => {
  return obj => {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

const arr = [1, 2, 3]
const callbackArray = isType('Array')
const res = callbackArray(arr)
console.log('res', res)
