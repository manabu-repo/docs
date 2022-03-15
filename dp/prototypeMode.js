// 原型模式

// class NoGi {
//   constructor(name, age, place, level, period = "1") {
//     this.name = name;
//     this.age = age;
//     this.birthplace = place;
//     this.level = level;
//     this.period = period;
//   }
// }

const NoGi = function (name, age, place, level, period = '1') {
  this.name = name
  this.age = age
  this.birthplace = place
  this.level = level
  this.period = period
}

const asu = new NoGi('asuak', 23, 'ty', 1, '1')
console.log('asu', asu)

// DEMO create object
// const obj = Object.create({}, {
//   name: {
//     value: 'aya',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// })
// console.log('obj', obj.name)

const prototypeMode = function (proto, mode) {
  let property = {}
  for (const [key, value] of Object.entries(mode)) {
    property[key] = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    }
  }

  return Object.create(proto, property)
}

const saku = prototypeMode(asu, {
  name: 'sakura',
  age: 20,
  birthplace: 'ty',
  period: '4'
})
console.log('saku', saku)
console.log('saku level', saku.level)
