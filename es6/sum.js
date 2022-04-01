// const sum = (x, y) => {
//   if (y > 0) {
//     return sum(x + 1, y - 1)
//   } else {
//     return x
//   }
// }

const sum = (x, y) => {
  if (y > 0) {
    return sum(x + 1, y - 1)
  }

  return x
}

// 栈溢出异常
const res = sum(1, 100000)
console.log('res', res)
