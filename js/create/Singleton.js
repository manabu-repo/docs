// 单例模式的定义：保证全局只存在一个实例
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

// 缓存代理实现单例
const createSingleton = function (prop) {
  this.prop = prop
}

const ProxySingleton = function (prop) {
  let instance

  return function () {
    if (!instance) {
      instance = new createSingleton(prop)
    }
    return instance
  }
}

// 惰性单例
const getSingle = function (fn) {
  let result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

// 应用：如全局模态框/登录、全局只存在一个的实例
