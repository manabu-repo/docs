const randomPosition = (pos, diff = 10) => {
  return [Math.random() * diff + pos[0], Math.random() * diff + pos[1]];
};

const swapArray = (index1, index2, arr) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

const accumulator = arr => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};

const sortArray = arr => {
  // const temp = arr.copyWithin(0, 0);
  // arr.map((el, index) => {
  //   if (el > temp[index + 1]) {
  //     [el, temp[index + 1]] = [temp[index + 1], el];
  //   }
  // });
  // return temp;

  return arr.sort((prev, cur) => prev[1] - cur[1]);
};

module.exports = {
  randomPosition,
  swapArray,
  accumulator,
  sortArray,
};
