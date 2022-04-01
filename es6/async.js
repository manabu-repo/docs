const fn = async () => {
  await setTimeout(() => console.log('async'), 1000)
}

console.log('start')

await fn()

console.log('next')
