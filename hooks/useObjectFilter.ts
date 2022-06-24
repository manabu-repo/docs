/**
 * @description 过滤对象
 * @param obj
 * @param callback
 * @returns {Object}
 */
const useObjectFilter = (obj: any, callback: (o: {}) => boolean): {} => {
  return Object.keys(obj)
    .filter(key => callback(obj[key]))
    .reduce((res: any, key: any) => {
      res[key] = obj[key]
      return res
    }, {})
}

export { useObjectFilter }
