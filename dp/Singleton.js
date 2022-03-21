// 单例模式

// class Singleton {
//   constructor (name) {
//     this.name = name
//     this.instance = null
//   }
// }

const Singleton = function (name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function () {
  return this.name
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }

  return this.instance
}

const asuka = Singleton.getInstance('asuka')
const asuka02 = Singleton.getInstance('shiori')

console.log(asuka === asuka02)
console.log('asuak', asuka.name)
console.log('asuka02', asuka02.name)

// 惰性单例，即使用时才会去创建的单例模式，而不是一开始就创建。
