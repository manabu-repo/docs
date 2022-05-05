const CreateDiv = function (html) {
  this.html = html
  // this.init()
}

CreateDiv.prototype.init = function () {
  const div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

// 必须是立即执行函数，才能保证instance唯一
const ProxySingleton = (function () {
  let instance = null

  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }

    return instance
  }
})()

const a = new ProxySingleton('div1')
const b = new ProxySingleton('div2')

console.log(a === b)
console.log('a', a.html)
console.log('b', b.html)
