// 迭代器模式：提供一种方法顺序访问一个聚合对象中的各个元素

const each = function (arr, callback) {
  for (let i = 0, l = arr.length; i < l; i++) {
    callback.call(arr[i], i, arr[i]);
  }
}

each(['a', 'b', 3, 4], (index, item) => {
  console.log('index: ', index, ' item: ', item);
})
