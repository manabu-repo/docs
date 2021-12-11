const {
  uniqueArraySet,
  uniqueArrayIncludes,
  uniqueArrayFilter,
  uniqueArrayReduce,
} = require('../function/array');

const arr = [1, 1, 2, 4, 6];
// const res = uniqueArraySet(arr);
// const res = uniqueArrayIncludes(arr);
// const res = uniqueArrayFilter(arr);
const res = uniqueArrayReduce(arr);

console.log('res', res);
