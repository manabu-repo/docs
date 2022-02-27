# TwoSum

`两数相加`

示例 1：

```text
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

示例 2：

```text
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

示例 3：

```text
输入：nums = [3,3], target = 6
输出：[0,1]
```

## `Case 1`

> 考虑数组的起始和边界条件

```js
const twoSum = function (nums, target) {
  let n = nums.length;
  for (let index = 0; index < n; index++) {
    for (let subscript = index + 1; subscript < n; subscript++) {
      if (nums[index] + nums[subscript] === target) {
        return [index, subscript];
      }
    }
  }
  return [];
};
```

## `Case 2`

> 考虑改变数据结构及实现思路

```ts
const twoSum = (nums: number[], target: number): number[] => {
  let map = new Map();
  for (let [index, element] of nums.entries()) {
    if (map.has(target - element)) {
      return [map.get(target - element), index];
    }
    map.set(element, index);
  }
  return [];
};
```
