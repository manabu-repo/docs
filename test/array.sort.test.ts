import { useArraySort } from '../hooks/useArraySort';

const arr = [
  [1, 3],
  [4, 7],
  [2, 9],
  [3, 6],
];
const res = useArraySort(arr, 'x')
console.log('arr', arr)
console.log('res', res)
