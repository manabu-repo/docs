# Module

- CommonJS

服务器端解决方案

- AMD

浏览器端解决方案

- ES6

浏览器和服务器通用的模块解决方案

## CommonJS 规范

NodeJs 中使用。

为了解决 `JavaScript` 的作用域问题而定义的模块形式。

- `module.exports` 导出

- `require()` 导入

```js
// moduleA.js
module.exports = (x, y) => {
  return x + y;
}

// moduleB.js
const sum = require('./moduleA');
```

同步加载模块

## AMD

异步模块定义（`Asynchronous Module Definition`）

```js
require([module], callback)
define(id, [depends], callback)
```

## CMD

依赖就近

`Common Module Definition`

```js
define(id?: String, dependencies?: String[], factory: Function|Object);

require(['myModule'], function(myModule) {});
```

## ES6 module

```js
// 命名导出
export const name;
export function() {};

// 默认导出
export default moduleA;

// 导出模块集合
export * from moduleB;
export * as name from moduleB;  // set default export

import moduleA from './moduleA.js';
```
