const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('asuka', () => console.log('asuka'))
eventEmitter.emit('asuka')

eventEmitter.once('shiori', () => console.log('shiori'))
eventEmitter.emit('shiori')
