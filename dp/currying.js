// 函数柯里化

const currying = function (fn) {
  const args = []

  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      ;[].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

const cost = (function () {
  let money = 0
  return () => {
    for (let i = 0, len = arguments.length; i < len; i++) {
      money += arguments[i]
    }

    return money
  }
})()

const useCost = currying(cost)
useCost(100)
useCost(200)

const res = useCost()
console.log('cost', res)
