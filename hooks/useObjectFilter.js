const useObjectFilter = (obj, callback) => {
  return Object.keys(obj)
    .filter(key => callback(obj[key]))
    .reduce((res, key) => {
      res[key] = obj[key]
      return res
    }, {})
}

module.exports = { useObjectFilter }
