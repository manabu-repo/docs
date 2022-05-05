# ReverseInteger

`整数反转`

> 给你一个 `32` 位的有符号整数 `x` ，返回 `x` 中每位上的数字反转后的结果。

如果反转后整数超过 `32` 位的有符号整数的范围 `[−231,  231 − 1]` ，就返回 `0`。

假设环境不允许存储 `64` 位整数（有符号或无符号）。

示例 1：

```text
输入：x = 123
输出：321
```

示例 2：

```text
输入：x = -123
输出：-321
```

示例 3：

```text
输入：x = 120
输出：21
```

示例 4：

```text
输入：x = 0
输出：0
```

## `Case 1`

> 转换为字符串

```ts
const reverse = (x: number): number => {
  let num = parseInt(Math.abs(x).toString().split('').reverse().join(''));

  if (
    (x > 0 && num > 2 ** 31 - 1) ||
    (x < 0 && -num < -(2 ** 31))
  ) {
    return 0;
  }

  if (x < 0) {
    return -num;
  }
  return num;
}
```

## `Case 2`

```ts
const reverse = (x: number): number => {
  let result: number = 0;
  let num: number = x > 0 ? x : -x;

  while (num !== 0) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  if (
    (x < 0 && -result < -Math.pow(2, 31)) ||
    (x > 0 && result > Math.pow(2, 31) - 1)
  ) {
    return 0;
  }
  
  return x > 0 ? result : -result;
}
```
