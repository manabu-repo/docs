const unCurrying = function () {}

const obj1 = {
  name: 'asuka'
}

const obj2 = {
  name: 'shiori',

  getName: function () {
    return this.name
  }
}

const res = obj2.getName.call(obj1)
console.log('res', res)

Function.prototype.uncurrying = function () {
  const self = this

  return function () {
    const obj = Array.prototype.shift.call(arguments)
    return self.apply(obj, arguments)
  }
}

Function.prototype.unCurrying = function () {
  const self = this

  return function () {
    return Function.prototype.call.apply(self, arguments)
  }
}

const push = Array.prototype.push.uncurrying()
const obj = {
  length: 1,
  '0': 1
}

push(obj, 'aya')
console.log('obj', obj)
