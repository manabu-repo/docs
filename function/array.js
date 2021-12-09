const randomPosition = (pos, diff = 10) => {
  return [Math.random() * diff + pos[0], Math.random() * diff + pos[1]];
};

const swapArray = (index1, index2, arr) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

const accumulator = arr => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};

/**
 * @description: 二维数组排序
 * @param {Array} arr
 * @param {String} mode 排序方式
 * @return {*}
 */
const sortArray = (arr, mode = 'x') => {
  mode === 'x' && arr.sort();

  mode === 'y' && arr.sort((prev, cur) => prev[1] - cur[1]);
};

const sort = arr => {
  // const temp = arr.copyWithin(0, 0);
  // arr.map((el, index) => {
  //   if (el > temp[index + 1]) {
  //     [el, temp[index + 1]] = [temp[index + 1], el];
  //   }
  // });
  // return temp;
};

module.exports = {
  randomPosition,
  swapArray,
  accumulator,
  sortArray,
};
