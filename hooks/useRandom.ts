export const useRandom = (arr: string[]): string => {
  const len = arr.length
  const index = Math.floor(Math.random() * len)
  return arr[index]
}
