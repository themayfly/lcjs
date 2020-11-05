
var arr = [];
var map = {};
// n > 0, integer
var fibo = function(n) {
  if (isNaN(n) || n < 1) {
    console.log('#### n should be n > 0, integer ');
  }
  if (n < 3) {
    arr.push(1);
    map[n] = 1;
    return 1;
  }
  var next = (map[n-2] || fibo(n-2)) + (map[n-1] || fibo(n-1));
  arr.push(next);
  map[n] = next;
  return next;
}

console.log(fibo(10))
console.log(arr)