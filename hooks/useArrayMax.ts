/**
 * @description 获取数组最大值
 * @param {number[]} arr
 * @returns {number}
 */
const arrayMax = (arr: number[]): number | undefined => {
  if (!arr.length) return

  return arr.reduce((prev, cur) => (prev > cur ? prev : cur))
};

export { arrayMax as useArrayMax }
