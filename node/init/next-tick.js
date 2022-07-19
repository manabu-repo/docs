const bar = () => console.log('bar')
const foo = () => console.log('foo')
const zoo = () =>
  new Promise((resolve, reject) => resolve('zoo')).then(resolve =>
    console.log(resolve)
  )

zoo()
process.nextTick(() => bar())
foo()

// expected:
// foo
// bar
// zoo
