const performanceS = function () {}

performanceS.prototype.calculate = function (salary) {
  return salary * 4
}

const performanceA = function () {}

performanceA.prototype.calculate = function (salary) {
  return salary * 3
}

const performanceB = function () {}

performanceB.prototype.calculate = function (salary) {
  return salary * 2
}

const Bonus = function () {
  this.salary = null
  this.strategy = null
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary
}

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy
}

Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary)
}

const bonus = new Bonus()

bonus.setSalary(10000)
bonus.setStrategy(new performanceS())

console.log('S', bonus.getBonus())

bonus.setStrategy(new performanceA())

console.log('A', bonus.getBonus())

const strategies = {
  ['s']: function (salary) {
    return salary * 4
  },

  ['a']: function (salary) {
    return salary * 3
  }
}

const calculateBonus = function (level, salary) {
  return strategies[level](salary)
}

console.log('s', calculateBonus('s', 10000))
console.log('a', calculateBonus('a', 10000))
