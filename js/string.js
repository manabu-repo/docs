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

module.exports = {
  at,
  chartAt,
}
