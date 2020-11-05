var arr = [];
var map = {};
var fn = function(n) {
  if (n === null || n <= 0) {
    map[0] = 0;
    return 0 ;
  } else if (n === 1) {
    map[n] = 1;
    arr[n] = 1;
  } else {
    const n_1 = map[n-1] || fn(n-1);
    const n_2 = map[n-2] || fn(n-2);
    arr[n] = n_1 + n_2;
  }
  return arr[n];
};


console.log(fn(process.argv[2]))

console.log(arr.slice(1));