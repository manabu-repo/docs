// 分时函数

const timeChunk = function (arr, fn, count) {
  let obj
  let t = null
  let len = arr.length

  const start = function () {
    for (let i = 0; i < Math.min(count || l, arr.length); i++) {
      let obj = arr.shift()
      fn(obj)
    }
  }

  return function () {
    t = setInterval(() => {
      if (arr.length === 0) {
        return clearInterval(t)
      }

      start()
    }, 200)
  }
}
