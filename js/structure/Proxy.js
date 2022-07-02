// 代理模式： 为对象提供一个占位符，以便控制他的访问
// 如明星的经纪人、网络代理

// 保护代理：拦截过滤请求，控制访问
// 虚拟代理：对开销很大的对象，延迟到真正需要他的时候才去创建
// 缓存代理：对一些开销大的运算结果提供暂时的存储

// 代理模式实现图片预加载
const myImage = (function () {
  const imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return function (src) {
    imgNode.src = src;
  }
})();

const proxyImage = (function () {
  const img = new Image;

  img.onload = function () {
    myImage(this.src);
  }

  return function (src) {
    myImage('loading.gif');
    img.src = src;
  }
})();

proxyImage('source.jpg');

// 合并HTTP请求
const synchronousFile = function (id) { }

const proxySynchronousFile = (function () {
  const cache = [];
  let timer;

  return function (id) {
    cache.push(id);
    if (timer) return;

    timer = setTimeout(() => {
      synchronousFile(cache.join(', '));
      clearInterval(timer);
      timer = null;
      cache.length = 0;
    }, 2000)
  }
})();

// 缓存代理
const multi = function () {
  let ret = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    ret = ret * arguments[i];
  }
  return ret;
}

const proxyMulti = (function () {
  const cache = {};

  return function () {
    let args = Array.prototype.join.call(arguments, ', ');

    if (args in cache) return cache[args];

    return cache[args] = multi.apply(this, arguments);
  }
})();

proxyMulti(1, 2, 3, 4);
// 缓存异步请求同理

// 高阶函数动态创建代理
const plus = function () {
  let ret = 0;

  for (let i = 0, l = arguments.length; i < l; i++) {
    ret = ret + arguments[i];
  }
  return ret;
}

const createProxyFactory = function (fn) {
  let cache = {};

  return function () {
    let args = Array.prototype.join.call(arguments, ', ');

    if (args in cache) return cache[args];

    return cache[args] = fn.apply(this, arguments);
  }
}

const proxyPlus = createProxyFactory(plus);
proxyPlus(1, 2, 3, 4);
