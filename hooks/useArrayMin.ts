/**
 * @description 获取最小值
 * @param {number[]} arr
 * @returns {number}
 */
const arrayMin = (arr: number[]): number | undefined => {
  if (!arr.length) return

  return arr.reduce((prev, cur) => Math.min(prev, cur))
}

export { arrayMin as useArrayMin }
