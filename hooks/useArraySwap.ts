/**
 * @description 交换数组中任意两个元素的位置
 * @param {number} p
 * @param {number} k
 * @param {array} arr
 * @returns {array}
 */
const swapArray = (p: number, k: number, arr: any[]): any[] => {
  [arr[p], arr[k]] = [arr[k], arr[p]]
  return arr
}

export { swapArray as useArraySwap }
