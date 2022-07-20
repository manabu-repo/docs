addEventListener(
  'message',
  e => {
    console.log('side work: ', e.data)
  },
  false
)

postMessage({
  name: 'akashi'
})
