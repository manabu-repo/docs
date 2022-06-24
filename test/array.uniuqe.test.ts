// const {
//   useSetUniuqe,
//   useIncludesUniuqe,
//   useFilterUniuqe,
//   useReduceUniuqe
// } = require('../hooks/useArrayUniuqe')

import { useSetUniuqe, useReduceUniuqe } from '../hooks/useArrayUniuqe';

const arr = [1, 1, 2, 4, 6]
const res = useSetUniuqe(arr)

console.log('res', res)
