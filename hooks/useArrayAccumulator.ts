/**
 * @description 累加器
 * @param {array} arr
 * @returns {number}
 */
const accumulator = (arr: number[]): number => {
  return arr.reduce((prev, cur) => prev + cur, 0)
}

export { accumulator as useArrayAccumulator };
