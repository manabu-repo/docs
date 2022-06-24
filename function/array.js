/**
 * @description 随机生成坐标
 * @param {number[]} pos
 * @param {number} diff
 * @returns {number[]}
 */
const randomPosition = (pos, diff = 10) => {
  return [Math.random() * diff + pos[0], Math.random() * diff + pos[1]];
};

/**
 * @description 交换数组中任意两个元素的位置
 * @param {number} index1
 * @param {number} index2
 * @param {array} arr
 * @returns {array}
 */
const swapArray = (index1, index2, arr) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

/**
 * @description 累加器
 * @param {array} arr
 * @returns {number}
 */
const accumulator = arr => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};

/**
 * @description: 二维数组排序
 * @param {array} arr
 * @param {string} mode 排序方式
 */
const sortArray = (arr, mode = 'x') => {
  mode === 'x' && arr.sort();

  mode === 'y' && arr.sort((prev, cur) => prev[1] - cur[1]);
};

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
