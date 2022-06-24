/**
 * @description: 数组排序
 * @param arr
 */
const uniqueArraySet = (arr: number[]) => {
  return Array.from(new Set(arr))
}

const uniqueArrayIncludes = arr => {
  const res = []
  arr.map(item => !res.includes(item) && res.push(item))
  return res
}

const uniqueArrayFilter = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

const uniqueArrayReduce = arr => {
  return arr.reduce((prev, cur) => {
    return prev.includes[cur] ? prev : prev.concat(cur)
  }, [])
}

// module.exports = {
//   useSetUniuqe: uniqueArraySet,
//   useIncludesUniuqe: uniqueArrayIncludes,
//   useFilterUniuqe: uniqueArrayFilter,
//   useReduceUniuqe: uniqueArrayReduce
// }

export {
  uniqueArraySet as useSetUniuqe,
  uniqueArrayIncludes as useIncludesUniuqe,
  uniqueArrayFilter as useFilterUniuqe,
  uniqueArrayReduce as useReduceUniuqe
}
