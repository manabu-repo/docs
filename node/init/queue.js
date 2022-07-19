// Message Queue 消息队列
const bar = () => console.log('bar')
setTimeout(bar, 0)

// Job Queue 作业队列
const foo = () =>
  new Promise((resolve, reject) => resolve('promise resolved')).then(resolve =>
    console.log(resolve)
  )
foo()

// expected:
// promise resolved
// bar
