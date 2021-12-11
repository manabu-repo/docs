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

const arrayMin = arr => {
  if (!arr.length) return;

  return arr.reduce((prev, cur) => Math.min(prev, cur));
};

const arrayMax = arr => {
  if (!arr.length) return;

  return arr.reduce((prev, cur) => (prev > cur ? prev : cur));
};

const uniqueArraySet = arr => {
  return Array.from(new Set(arr));
};

const uniqueArrayIncludes = arr => {
  const res = [];
  arr.map(item => !res.includes(item) && res.push(item));
  return res;
};

const uniqueArrayFilter = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

const uniqueArrayReduce = arr => {
  return arr.reduce((prev, cur) => {
    return prev.includes[cur] ? prev : prev.concat(cur);
  }, []);
};

/**
 * @description 二维数组转化为一维数组
 * @param {Array} arr
 * @returns {Array}
 */
const flatten = arr => {
  return arr.reduce((prev, cur) => prev.concat(cur));
};

/**
 * @description 多维数组转化为一维数组
 * @param {Array} arr
 * @returns {Array}
 */
const arrayFlat = arr => {
  // return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? arrayFlat(cur) : cur), []);
  return arr.reduce((prev, cur) => {
    return Array.isArray(cur) ? arrayFlat(cur) : prev.concat(cur);
  }, []);
};

const computedOccurNumber = arr => {
  arr.reduce((prev, cur) => {
    if (prev.cur) {
      prev[cur]++;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, []);
};

const test = arr => {
  const map = new Map();
  arr.reduce((prev, cur) => {
    if (map.has(cur)) {
      map.set(cur);
    } else {
    }

    return cur;
  }, map);
};

module.exports = {
  randomPosition,
  swapArray,
  accumulator,
  sortArray,
  arrayMin,
  arrayMax,
  uniqueArraySet,
  uniqueArrayIncludes,
  uniqueArrayFilter,
  uniqueArrayReduce,
  flatten,
  arrayFlat,
  computedOccurNumber,
};
