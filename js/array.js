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
const every = (callback, _this = this) => {
  if (arr.length === 0) return true;

  const verify = [];
  arr.map(element => {
    let validate = callback(element, index, arr);
    verify.push(validate);
  });

  const validate = verify.find(v => v === false);
  if (validate) {
    return false;
  }

  return true;
};

/**
 * @description 用一个固定值填充从开始索引到终止（不包括）的数组
 * @param {any} value
 * @param {number} start
 * @param {number} end
 * @returns {array}
 */
const fill = (value, start = 0, end = arr.length) => {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }

  return arr;
};

/**
 * @description 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 * @param {(element: any, index: number, arr: array) => any} callback
 * @returns {Element | undefined}
 */
const find = (callback, _this = this) => {
  let el;
  arr.map(element => {
    el = callback(element, index, arr);
  });

  if (el) {
    return el;
  }
  return undefined;
};

/**
 * @description 返回满足条件的第一个元素的索引，若没找到则返回-1
 * @param {(element: any, index: number, arr: array) => any} callback
 * @returns {number}
 */
const findIndex = (callback, _this = this) => {
  let el;
  arr.map(element => {
    el = callback(element, index, arr);
  });

  if (el) {
    return index;
  }
  return -1;
};

/**
 * @description 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 * @param {number} deep
 * @returns {array}
 */
const flat = (deep = 1) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

/**
 * @description 使用映射函数映射每个元素，然后将结果压缩成一个新数组。与arr.flat(1)几乎相同
 * @param {(element: any, index: number, arr: array) => any} callback
 * @returns {array}
 */
const flatMap = callback => {
  return callback(current, index, arr);
};

/**
 * @description 对每一个函数执行一次给定函数
 * @param {(element: any, index: number, arr: array) => any} callback
 */
const forEach = (callback, _this = this) => {
  callback(element, index, arr);
};

/**
 *  @description 对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
 * @param {array} arr
 * @param {(el: any) => void} callback
 * @param {*} _this
 * @returns {array}
 */
const from = (arr, callback, _this = this) => {
  return Array.from(arr);
};

/**
 * @description 判断一个数组是否包含一个指定的值，返回true或false
 * @param {any} element
 * @param {number} index
 * @returns {boolean}
 */
const includes = (element, index = 0) => {
  const el = arr.find(e => e === element);

  if (el) {
    return true;
  }
  return false;
};

/**
 * @description 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
 * @param {any} element
 * @param {number} index
 * @returns {number}
 */
const indexOf = (element, index = 0) => {
  return arr.findIndex(e => e === element);
};

/**
 * @description 确定传递的值是否是一个 Array
 * @param {any} obj
 * @returns {boolean}
 */
const isArray = obj => {
  return Array.isArray(obj);
};

/**
 * @description 将数组的所有元素连接成一个字符串并返回这个字符串
 * @param {string} sep
 * @returns {string}
 */
const join = sep => {
  return;
};

/**
 * @description 返回一个包含数组中每个索引键的Array Iterator对象
 * @returns {Iterator}
 */
const keys = () => {
  return arr.keys();
};

/**
 * @description 返回指定元素在数组中最后一个的索引
 * @param {any} element
 * @param {number} index
 * @returns {number}
 */
const lastIndexOf = (element, index = arr.length - 1) => {
  // return arr.reverse().findIndex(e => e === element);
};

/**
 * @description 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
 * @param {(element: any, index: number, arr: array) => any[]} callback
 * @param {this} _this
 */
const map = (callback, _this = this) => {
  return callback(element, index, arr);
};

/**
 * @description 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
 * @param  {...any} arguments
 * @returns {array}
 */
const of = (...args) => {
  return new Array(...args);
};

/**
 * @description 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
 * @returns {element}
 */
const pop = () => {
  const res = arr[arr.length - 1];
  arr.length -= 1;
  return res;
};

/**
 * @description 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
 * @param {...any} args
 * @returns {number}
 */
const push = (...args) => {
  arr.length += args.length;
  const start = args.length;
  const end = start + args.length;

  for (let index = start; index < end; index++) {
    arr[index] = args.shift();
  }

  return arr.length;
};

/**
 * @description 对数组中的每个元素执行回调函数，将其结果汇总为单个返回值
 */
const reduce = callback => {};

/**
 *
 * @param {*} callback
 */
const reduceRight = callback => {};

/**
 * @description 返回倒置的数组，该方法会改变原数组
 * @returns {array}
 */
const reverse = () => {
  const res = [];
  const len = arr.length - 1;

  for (let index = len; index > 0; index--) {
    res.push(arr[index]);
  }

  return res;
};

const shift = () => {
  
}

/**
 * @description 数组中至少存在一个元素满足条件
 * @param {(element: any, index: number, arr: array) => any} callback
 * @returns {boolean}
 */
const some = (callback, _this = this) => {
  if (arr.length === 0) return true;

  let res = arr.find(element => callback(element, index, arr));

  if (res) {
    return true;
  }

  return false;
};
