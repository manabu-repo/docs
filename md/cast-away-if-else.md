# if-else Cast away

## 提前 `return`

> 优先处理错误参数，空值等，提前返回，不要进入 `else` 分支

## 三目运算

> 较短分支考虑使用三目运算符

## 数据结构

> 考虑升维数据结构，使用数组、对象、Map、枚举解决

### 数组

a. 多个条件使用 `Array.includes`

b. 所有或部分使用 `Array.every` & `Array.some` 的条件

### 枚举

`ts` 中定义常量的优雅方式。

### 对象

```js
const obj = {
  'key': value
}
```

### Map

```js
const map = new Map([
  ['key', 'value']
])
```

## `es6` 解构

> 使用默认参数和参数解构，减少分支可能

## 重构

> 采用 `OO` 重构代码，实现接口继承。

1. 定义类或接口

2. 定义方法

3. 子类定义

4. 重写方法
