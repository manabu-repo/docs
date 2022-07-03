let wm = new WeakMap();

const fn = () => {}
wm.set(fn, 'test');

let ret = wm.get(fn);
console.log('ret', ret);
