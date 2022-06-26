import { observer } from '../typescript/behavior/Observer'

observer.on(() => console.log('asuka'))
observer.on(() => console.log('shiori'))
observer.on(() => console.log('nao'))
observer.on(() => console.log('nagi'))

observer.emit()
