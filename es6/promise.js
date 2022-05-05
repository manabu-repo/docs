const promise = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})

promise.then(res => {
  console.log('resolved')
})

console.log('next')
