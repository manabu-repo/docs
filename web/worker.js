const worker = new Worker('work.js')

worker.postMessage('hello, worker!')

worker.onmessage = event => {
  console.log('e: ', event.data)
}
