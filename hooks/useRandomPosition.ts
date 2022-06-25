/**
 * @description 随机生成附近坐标
 * @param {number[]} pos
 * @param {number} diff
 * @returns {number[]}
 */
const randomPosition = (pos: number[], diff: number = 10): number[] => {
  return [Math.random() * diff + pos[0], Math.random() * diff + pos[1]]
}

export { randomPosition as useRandomPosition };
