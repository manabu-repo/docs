// 函数节流

const throttle = function (fn, interval = 500) {
  const __self = fn

  let timer = null
  let firstTime = true

  return function () {
    const args = arguments
    const vm = this

    if (firstTime) {
      __self.apply(vm, args)
      return (firstTime = false)
    }

    if (timer) {
      return false
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      __self.apply(vm, args)
    }, interval)
  }
}

// onresize onmousemove
window.onresize = throttle(() => {
  console.log('1')
}, 1000)
