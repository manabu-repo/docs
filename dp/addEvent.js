// 惰性加载函数

const addEvent = function () {
  if (window.addEventListener) {
    return function (elem, type, handler) {
      elem.addEventListener(type, handler, false)
    }
  }

  if (window.attachEvent) {
    return function (elem, type, handler) {
      elem.attachEvent('on' + type, handler)
    }
  }
}
