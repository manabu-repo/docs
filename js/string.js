const str = 'asuak.ayame.shiori.mizuki.umei';

/**
 * @description (实验中)返回索引位置的字符
 * @param {number} index
 * @returns {string}
 */
const at = index => {
  return str.at(index);
};

/**
 * @description 从一个字符串中返回指定的字符
 * @param {number} index
 * @returns {string}
 */
const chartAt = index => {
  return str.charAt(index);
};

/**
 * @description A => 65
 * @param {number} index
 * @returns {string}
 */
const chartCodeAt = (index = 0) => {
  return str.charCodeAt(index);
};

/**
 * @description 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
 * @param  {...string} args
 * @returns {string}
 */
const concat = (...args) => {
  const res = str;
  args.map(s => res + s);
  return res;
};

module.exports = {
  at,
  chartAt,
  concat,
};
