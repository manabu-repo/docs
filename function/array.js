const randomPosition = (pos, diff) => {
  return [Math.random() * diff + pos[0], Math.random() * diff + pos[1]];
};

const swapArray = (index1, index2, arr) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

module.exports = {
  randomPosition,
  swapArray,
}
