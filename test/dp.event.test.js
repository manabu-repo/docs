const { $event } = require('../js/behavior/Observer')

const listen1 = e => console.log('e: asuu, ', e)
const listen2 = e => console.log('e: shi, ', e)

$event.listen('asuka', listen1)
$event.listen('shiori', listen2)

$event.trigger('asuka', 1)
$event.trigger('shiori', 1)
$event.remove(listen1)  // TODO: not working
$event.trigger('asuka', 2)
