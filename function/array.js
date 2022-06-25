


/**
 * @description 获取最小值
 * @param {number[]} arr
 * @returns {number}
 */
const arrayMin = arr => {
  if (!arr.length) return;

  return arr.reduce((prev, cur) => Math.min(prev, cur));
};

/**
 * @description 获取最大值
 * @param {number[]} arr
 * @returns {number}
 */
const arrayMax = arr => {
  if (!arr.length) return;

  return arr.reduce((prev, cur) => (prev > cur ? prev : cur));
};

/**
 * @description 二维数组转化为一维数组
 * @param {array} arr
 * @returns {array}
 */
const flatten = arr => {
  return arr.reduce((prev, cur) => prev.concat(cur), []);
};

/**
 * @description 多维数组转化为一维数组
 * @param {array} arr
 * @returns {array}
 */
const arrayFlat = arr => {
  // return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? arrayFlat(cur) : cur), []);
  return arr.reduce((prev, cur) => {
    return Array.isArray(cur) ? arrayFlat(cur) : prev.concat(cur);
  }, []);
};

/**
 * @description 计算元素出现次数
 * @param {array} arr
 * @returns {{any: number}}
 */
const computedOccurNumber = arr => {
  return arr.reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, {});
};

module.exports = {
  randomPosition,
  swapArray,
  accumulator,
  sortArray,
  arrayMin,
  arrayMax,
  flatten,
  arrayFlat,
  computedOccurNumber,
};
