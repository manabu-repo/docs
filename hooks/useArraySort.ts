/**
 * @description: 二维数组排序
 * @param {array} arr
 * @param {string} mode 排序方式
 */
const sortArray = (arr: number[][], mode: string = 'x'): number[][] => {
  arr = [...arr]  // 解除对原数组的引用
  mode === 'x' && arr.sort();

  mode === 'y' && arr.sort((prev, cur) => prev[1] - cur[1]);

  return arr  // default
}

export { sortArray as useArraySort }
