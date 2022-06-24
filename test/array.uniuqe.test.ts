import {
  useSetUnique,
  useIncludesUnique,
  useFilterUnique,
  useReduceUnique
} from '../hooks/useArrayUnique';

const arr = [7, 1, 1, 2, 4, 6]
const res = useReduceUnique(arr)

console.log('res', res)
