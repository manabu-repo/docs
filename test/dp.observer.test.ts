import { observer } from '../typescript/behavior/Observer'

observer.on('asuka', () => console.log('asuka', 1))
observer.on('shiori', () => console.log('shiori'))
observer.on('nao', () => console.log('nao'))
observer.on('nagi', () => console.log('nagi'))

observer.remove('asuka')
observer.on('asuka', () => console.log('asuka', 2))

observer.emit('asuka')
observer.emit('nagi')
