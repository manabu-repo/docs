// order:
// process.nextTick() > Promise() > setTimeout(() => {}, 0) ≈ setImmediate()

const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => console.log('foo')
const zoo = () => console.log('zoo')

const start = () => {
  setImmediate(() => bar())
  setTimeout(() => baz(), 0)
  new Promise((resolve, reject) => resolve('promise')).then(resolve =>
    console.log(resolve)
  )
  process.nextTick(() => foo())
}
start()

// expected:
// foo
// promise
// baz
// bar
