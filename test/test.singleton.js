const getSingle = function (fn) {
  let result = null

  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

const Asu = function (name) {
  this.name = name
}

const Shiori = function (name) {
  this.name = name
}

const asu = getSingle(() => new Asu('asuak'))
const shiori = getSingle(() => new Shiori('shiori'))

console.log(asu === shiori)
