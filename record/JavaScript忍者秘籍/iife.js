(function (argument) {
  console.log(argument)
})(3);

((a, b) => {
  console.log(a + b);
})(3, 4);

(function () {
  console.log('IIFE')
}());

+function () {
  console.log('IIFE +');
}();

-function () {
  console.log('IIFE -');
}();

!function () {
  console.log('IIFE !');
}();

~function () {
  console.log('IIFE ~');
}();