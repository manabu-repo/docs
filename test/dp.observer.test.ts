import { observer } from '../typescript/behavior/Observer'

observer.on('asuka', () => console.log('asuka'))
observer.on('shiori', () => console.log('shiori'))
observer.on('nao', () => console.log('nao'))
observer.on('nagi', () => console.log('nagi'))
observer.on('asuka', () => console.log('asuka'))

observer.emit('asuka')
observer.emit('nagi')
