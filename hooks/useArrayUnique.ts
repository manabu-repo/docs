/**
 * @description: 数组去重
 * @param arr
 * @returns {number[]}
 */
const uniqueArraySet = (arr: number[]): number[] => {
  return Array.from(new Set(arr))
}

const uniqueArrayIncludes = (arr: number[]): number[] => {
  const res: number[] = []
  arr.map(item => !res.includes(item) && res.push(item))
  return res
}

const uniqueArrayFilter = (arr: number[]): number[] => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

const uniqueArrayReduce = (arr: number[]): number[] => {
  return arr.reduce((prev: any, cur: any) => {
    return prev.includes(cur) ? prev : prev.concat(cur)
  }, [])
}

export {
  uniqueArraySet as useSetUnique,
  uniqueArrayIncludes as useIncludesUnique,
  uniqueArrayFilter as useFilterUnique,
  uniqueArrayReduce as useReduceUnique
}
