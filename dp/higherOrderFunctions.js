// 高阶函数

// 1. 函数可以作为参数被传递
// 2. 函数何以作为返回值输出

// a. 函数作为参数传递
const callbackFn = (arg, callback) => {
  callback(arg)
}

const max = callbackFn([1, 3, 4], Math.max)
console.log('max', max)

const consoleTypeof = obj => {
  console.log(typeof obj)
}

// null => object, undefined => undefined
// number => number, boolean => boolean, string => string
// array => object, function => function, object => object
// consoleTypeof(() => {})

const consoleInstance = (obj, type) => {
  console.log(obj instanceof type)
}

// consoleInstance([], Object)

const consoleType = fn => {
  console.log(Object.prototype.toString.call(fn))
}

// consoleType(() => {})

const isNull = () => {
  return Object.prototype.toString.call(obj) === '[object Null]'
}

const isUndefined = () => {
  return Object.prototype.toString.call(obj) === '[object Undefined]'
}

const isNumber = obj => {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

const isBoolean = obj => {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

const isString = obj => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

const isArray = obj => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const isFunction = obj => {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// b. 函数作为返回值输出
const isType = type => {
  return obj => {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

// const arr = [1, 2, 3]
// const callbackArray = isType('Array')
// const res = callbackArray(arr)
// console.log('res', res)

// const num = 1
// const func = (type, callback) => callback(type)
// const res = func('Number', isType)(num)
// console.log('res', res)

// const str = 'shiori'
// const res = isType('String')(str)
// console.log('res', res)

// 单例模式
const getSingle = fn => {
  let ret
  return () => {
    return ret || (ret = fn.apply(this, arguments))
  }
}

const getShiori = getSingle(() => 'shiori')
const shiori1 = getShiori()
const shiori2 = getShiori()
// console.log(shiori1 === shiori2)
