// arr = [[1,2,3],[4,[5,6]], 7] ==> [1,2,3,4,5,6,7]
var flatten = arr => {
  // boundary conditions
  if (!arr || arr.length === 0) {
    return [];
  }

  let result = []
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flatten(el));
    } else {
      result.push(el);
    }
  }
  return result;
};

console.log('#### result = ', flatten([[1,2,3],[4,[5,6]],7]))
