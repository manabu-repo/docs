// 策略模式

// class Strategy {}

const strategies = {
  ['asu']: () => console.log('asuak'),
  ['shiori']: () => console.log('shiori')
}

const calculate = type => {
  return strategies[type]()
}

calculate('asu')

const nogi = new Map([
  ['yama', () => console.log('mizuki')],
  ['wumei', () => console.log('wumei')]
])

const fn = nogi.get('yama')

fn.call(this)
