const arr = ['akashi', 'asuka', 'shiori', 'ayame', 'yama', 'mayu'];

/**
 * @description 返回当前索引的数组元素
 * @param {number} index
 * @returns {number}
 */
const at = index => {
  return arr[index];
};

/**
 * @description 合并两个或多个数组，不改变原数组，返回一个新数组
 * @param {array} arr1
 * @param {array | any} arr2
 * @returns {array}
 */
const concat = (arr1, arr2 = []) => {
  return arr1.push(...arr2);
};

/**
 * @description 浅复制数组的一部分并返回，不会改变原数组的长度
 * @param {number} target
 * @param {number} start
 * @param {number} end
 * @returns {array}
 */
const copyWithin = (target = 0, start = 0, end = arr.length) => {
  if (target > arr.length) return;

  if (target > start) target = arr.length;

  return arr;
};

/**
 * @description 返回一个新的Array Iterator对象,包含数组中每个索引的键/值对
 * @returns {{ key: number, value: any }}
 */
const entries = () => {
  let index = 0;
  let next = () => {
    index++;
    return { key: index, value: arr[index] };
  };
  return next;
};

/**
 * @description 数组中所有元素满足条件
 * @param {(element: any, index: number, arr: array) => any} callback
 * @returns {boolean}
 */
const every = callback => {
  if (arr.length === 0) return true;

  let res = arr.find(element => callback(element, index, arr));

  if (res) {
    return true;
  }

  return false;
};
