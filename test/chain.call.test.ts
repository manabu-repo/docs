const arr = [{
  name: 'akashi',
  age: 25,
}, {
  name: 'asuka',
  age: 24,
}, {
  name: 'shiori',
  age: 20
}, {
  name: 'nagi',
  age: 18
}]

const ret = arr.filter(r => r.age > 20).map(r => r.name)
console.log('ret: ', ret)
