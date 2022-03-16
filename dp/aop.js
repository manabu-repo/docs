// AOP 装饰者模式

Function.prototype.before = function (beforeFn) {
  const __self = this
  return function () {
    beforeFn.apply(this, arguments)
    return __self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  const __self = this
  return function () {
    let ret = __self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

const func = function () {
  console.log(2)
}

const res = func.before(() => console.log(1)).after(() => console.log(3))

res()
