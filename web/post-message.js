const on = () => {
  window.addEventListener('message', e => {
    if (e.data.event === undefined) return
    const event = e.data.event

    if (event === '$messageTest') {
      console.log('data', e.data)
    }
  })
}

const emit = () => {
  let data = {
    event: '$messageTest',
    data: {
      name: 'asuka'
    }
  }
  // window.parent.postMessage(data, '*')
  window.postMessage(data, '*')
}

on()
emit()
